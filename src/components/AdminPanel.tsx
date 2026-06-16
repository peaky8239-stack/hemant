import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Search, Download, Trash2, CheckCircle2, 
  Archive, PlusCircle, X, ChevronDown, RefreshCw 
} from 'lucide-react';
import { Inquiry } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Archived'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadInquiries = () => {
    const raw = localStorage.getItem('hemant_inquiries');
    if (raw) {
      try {
        setInquiries(JSON.parse(raw));
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    } else {
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  // Listen to custom updates from submission
  useEffect(() => {
    const handleSync = () => {
      loadInquiries();
    };
    window.addEventListener('inquiry_submitted', handleSync);
    return () => window.removeEventListener('inquiry_submitted', handleSync);
  }, []);

  const handleUpdateStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Archived') => {
    const updated = inquiries.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    localStorage.setItem('hemant_inquiries', JSON.stringify(updated));
    setInquiries(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to permanently delete this inquiry?')) {
      const updated = inquiries.filter(item => item.id !== id);
      localStorage.setItem('hemant_inquiries', JSON.stringify(updated));
      setInquiries(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Delete ALL student inquiries? This cannot be undone.')) {
      localStorage.removeItem('hemant_inquiries');
      setInquiries([]);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    
    const headers = ['Inquiry Date', 'Student Name', 'Parent Name', 'Class', 'Phone', 'Email', 'Message', 'Status'];
    const rows = inquiries.map(item => [
      new Date(item.submittedAt).toLocaleDateString(),
      `"${item.studentName.replace(/"/g, '""')}"`,
      `"${item.parentName.replace(/"/g, '""')}"`,
      `"${item.studentClass}"`,
      `"${item.phone}"`,
      `"${item.email}"`,
      `"${item.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      item.status
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `hemant_coaching_leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'All') return matchesSearch;
    return item.status === statusFilter && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="admin-panel-overlay" className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-xs">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="flex h-full w-full flex-col bg-white border-l border-slate-200 shadow-2xl md:max-w-3xl lg:max-w-4xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-blue">Admissions CRM Database</h3>
                  <p className="text-xs text-slate-500 font-medium">Verify class inquiries and print CSV files</p>
                </div>
              </div>
              
              <button 
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col overflow-y-auto p-6 space-y-6">
              {/* Actions & Filters Row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search name, class, contact..."
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                {/* Status Toggles & Helper Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleExportCSV}
                    disabled={filteredInquiries.length === 0}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 cursor-pointer shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" /> Export CSV
                  </button>
                  {inquiries.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="flex items-center gap-1.5 rounded-lg border border-red-250 bg-red-50 px-3.5 py-2 text-xs font-bold text-red-700 transition hover:bg-red-100 cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete Database
                    </button>
                  )}
                </div>
              </div>

              {/* Status Select Tabs */}
              <div className="flex border-b border-slate-200">
                {(['All', 'New', 'Contacted', 'Archived'] as const).map((tab) => {
                  const count = tab === 'All' 
                    ? inquiries.length 
                    : inquiries.filter(i => i.status === tab).length;
                  
                  return (
                    <button
                      key={tab}
                      onClick={() => setStatusFilter(tab)}
                      className={`relative px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                        statusFilter === tab 
                          ? 'text-brand-blue' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {tab} ({count})
                      {statusFilter === tab && (
                        <motion.div 
                          layoutId="activeAdminTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Inquiries list */}
              <div className="space-y-4">
                {filteredInquiries.length === 0 ? (
                  <div className="flex flex-col items-center justify-center border border-dashed border-slate-200 rounded-xl py-12 px-4 text-center bg-slate-50">
                    <Users className="h-8 w-8 text-slate-350 mb-2" />
                    <p className="text-sm font-bold text-slate-700">No batch inquiries found</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm">
                      {inquiries.length === 0 
                        ? "Any submission made via the Admission Trial Form will appear instantly in this secure management panel."
                        : "No inquiries match your active search terms."}
                    </p>
                  </div>
                ) : (
                  filteredInquiries.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border rounded-xl p-5 bg-white shadow-xs ${
                        item.status === 'New' 
                          ? 'border-brand-gold/60 bg-yellow-50/20' 
                          : item.status === 'Contacted'
                            ? 'border-emerald-200 bg-emerald-50/10'
                            : 'border-slate-200 opacity-70'
                      }`}
                    >
                      {/* Name & Badge Row */}
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap text-left">
                            <h4 className="font-display font-bold text-brand-blue text-base">{item.studentName}</h4>
                            <span className="rounded-full bg-slate-100 text-brand-blue px-2.5 py-0.5 text-xs font-bold border border-slate-200">
                              Class {item.studentClass}
                            </span>
                            {item.status === 'New' && (
                              <span className="rounded-full bg-amber-100 text-amber-850 px-2.5 py-0.5 text-[9px] font-bold border border-amber-200 uppercase tracking-widest">
                                New Inquiry
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 font-medium text-left mt-1">
                            Registered on {new Date(item.submittedAt).toLocaleString()}
                          </p>
                        </div>

                        {/* Status Toggles */}
                        <div className="flex items-center gap-1.5 self-start">
                          <button
                            onClick={() => handleUpdateStatus(item.id, 'Contacted')}
                            title="Mark as Contacted"
                            className={`rounded-lg p-1.5 text-xs transition border cursor-pointer ${
                              item.status === 'Contacted' 
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold' 
                                : 'bg-white border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-250 hover:bg-emerald-50'
                            }`}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(item.id, 'Archived')}
                            title="Mark as Archived"
                            className={`rounded-lg p-1.5 text-xs transition border cursor-pointer ${
                              item.status === 'Archived' 
                                ? 'bg-slate-100 border-slate-300 text-slate-700 font-bold' 
                                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <Archive className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            title="Delete Inquiry"
                            className="rounded-lg p-1.5 text-xs text-red-500 hover:bg-red-50 hover:border-red-200 transition border border-transparent cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-slate-600 border-t border-slate-100 pt-3 text-left">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Parent / Guardian</span>
                          <span className="text-brand-blue font-bold">{item.parentName}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Contact Medium</span>
                          <div className="space-y-0.5">
                            <a href={`tel:${item.phone}`} className="text-[#C69214] font-mono font-bold block hover:underline">
                              {item.phone}
                            </a>
                            {item.email && (
                              <a href={`mailto:${item.email}`} className="text-slate-500 text-xs hover:underline block">
                                {item.email}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {item.message && (
                        <div className="mt-3 bg-slate-50 rounded-lg p-3.5 text-xs text-slate-700 border border-slate-200 text-left">
                          <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider mb-1">Message Detail</span>
                          <p className="whitespace-pre-line leading-relaxed italic">"{item.message}"</p>
                        </div>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>All customer data resides privately inside local storage</span>
              </div>
              <div>
                <span>Hemant Coaching Classes • Admin Terminal</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
