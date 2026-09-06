import React, { useState } from 'react';
import { X, Check, Lock, ShieldCheck, Download, BookOpen, ArrowRight, Zap, CreditCard } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReader: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onOpenReader }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  if (!isOpen) return null;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPurchased(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#15131b] border border-[#342e40] rounded-xl shadow-2xl text-[#ede7dc] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2a2533] flex items-center justify-between bg-[#191720]">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#dfc18b]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#dfc18b]">
              Secure Checkout • 256-Bit SSL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#a59986] hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isPurchased ? (
          /* SUCCESS STATE */
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#dfc18b]/20 text-[#dfc18b] flex items-center justify-center mx-auto border border-[#dfc18b]/40">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#fbf8f2]">
                Thank You, {name || 'Reader'}!
              </h3>
              <p className="text-sm text-[#bab09f]">
                Your copy of <span className="text-[#dfc18b] italic font-serif">The Things People Feel... But Never Say</span> is ready for instant download. A copy has also been dispatched to <strong className="text-white">{email || 'your email'}</strong>.
              </p>
            </div>

            {/* Download Links */}
            <div className="p-4 bg-[#1b1822] rounded-lg border border-[#2e2938] space-y-3 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a09483] block">
                Instant Files Available:
              </span>
              
              <div className="flex flex-col gap-2">
                <a
                  href="#download-pdf"
                  onClick={(e) => { e.preventDefault(); alert("Downloading The Things People Feel - High-Res PDF"); }}
                  className="flex items-center justify-between p-3 rounded bg-[#221e2c] hover:bg-[#2c2738] transition-colors border border-[#3b3447] text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#dfc18b]" />
                    <span className="font-medium text-[#eae4d8]">Digital Edition (PDF - Printable & Tablet)</span>
                  </div>
                  <span className="text-[#998f7e] text-[11px]">8.4 MB</span>
                </a>

                <a
                  href="#download-epub"
                  onClick={(e) => { e.preventDefault(); alert("Downloading The Things People Feel - EPUB for Apple Books & Kobo"); }}
                  className="flex items-center justify-between p-3 rounded bg-[#221e2c] hover:bg-[#2c2738] transition-colors border border-[#3b3447] text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#dfc18b]" />
                    <span className="font-medium text-[#eae4d8]">eReader Edition (EPUB & Kindle)</span>
                  </div>
                  <span className="text-[#998f7e] text-[11px]">3.2 MB</span>
                </a>

                <a
                  href="#download-bonus"
                  onClick={(e) => { e.preventDefault(); alert("Downloading 30-Day Emotional Clarity Practice Guide"); }}
                  className="flex items-center justify-between p-3 rounded bg-[#221e2c] hover:bg-[#2c2738] transition-colors border border-[#3b3447] text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#dfc18b]" />
                    <span className="font-medium text-[#eae4d8]">30-Day Practice Workbook & Reflections</span>
                  </div>
                  <span className="text-[#dfc18b] text-[11px] font-semibold">Bonus</span>
                </a>
              </div>
            </div>

            {/* Read now action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenReader();
                }}
                className="flex-1 py-3.5 bg-[#dfc18b] hover:bg-[#ebd3a6] text-[#121014] font-semibold text-xs tracking-wider uppercase rounded shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Digital Reader Now</span>
              </button>
              
              <button
                onClick={onClose}
                className="px-5 py-3.5 bg-[#231f2c] hover:bg-[#2d2838] text-[#c7beaf] font-semibold text-xs tracking-wider uppercase rounded cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handlePurchase} className="p-6 sm:p-7 space-y-6">
            
            {/* Product Summary Row */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1b1923] border border-[#2d2737]">
              <div className="w-14 h-18 rounded overflow-hidden flex-shrink-0 border border-[#4a3f2d] shadow">
                <img
                  src="/images/book-cover.jpg"
                  alt="Book preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfc18b] block">
                  Author Edition • Instant Delivery
                </span>
                <h4 className="font-serif text-sm sm:text-base font-semibold text-[#f5f1e8] leading-tight">
                  THE THINGS PEOPLE FEEL... BUT NEVER SAY
                </h4>
                <p className="text-xs text-[#a39785] mt-0.5">
                  PDF + EPUB + MOBI + 30-Day Reflection Guide
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="font-serif text-2xl font-bold text-[#dfc18b] block">
                  $19
                </span>
                <span className="text-[10px] text-[#7a7263] line-through block">
                  $38 Regular
                </span>
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#b8ada0] block">
                Your Contact Details
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#1f1b27] border border-[#352f40] text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address for download"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#1f1b27] border border-[#352f40] text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method selector */}
            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#b8ada0] block">
                Payment Method
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-[#dfc18b] text-[#141217] border-[#dfc18b]'
                      : 'bg-[#1b1923] text-[#c9c1b3] border-[#312a3d] hover:border-[#dfc18b]/40'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    paymentMethod === 'apple'
                      ? 'bg-[#dfc18b] text-[#141217] border-[#dfc18b]'
                      : 'bg-[#1b1923] text-[#c9c1b3] border-[#312a3d] hover:border-[#dfc18b]/40'
                  }`}
                >
                  <span>Apple Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('google')}
                  className={`py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    paymentMethod === 'google'
                      ? 'bg-[#dfc18b] text-[#141217] border-[#dfc18b]'
                      : 'bg-[#1b1923] text-[#c9c1b3] border-[#312a3d] hover:border-[#dfc18b]/40'
                  }`}
                >
                  <span>Google Pay</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-2 pt-1 animate-in fade-in duration-200">
                  <input
                    type="text"
                    placeholder="Card Number (Demo: 4242 •••• •••• 4242)"
                    defaultValue="4242 4242 4242 4242"
                    className="w-full px-3.5 py-2.5 rounded bg-[#1f1b27] border border-[#352f40] text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      defaultValue="12/28"
                      className="w-full px-3.5 py-2.5 rounded bg-[#1f1b27] border border-[#352f40] text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      defaultValue="888"
                      className="w-full px-3.5 py-2.5 rounded bg-[#1f1b27] border border-[#352f40] text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Guarantee note */}
            <div className="p-3 bg-[#110f16] rounded border border-[#231f2a] flex items-center gap-3 text-xs text-[#a09584]">
              <ShieldCheck className="w-5 h-5 text-[#dfc18b] flex-shrink-0" />
              <span>
                Backed by Daniel's 30-day unconditional refund policy. If not completely enlightened, email us anytime.
              </span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-[#dfc18b] hover:bg-[#ebd4aa] text-[#121014] font-semibold text-xs tracking-widest uppercase rounded shadow-xl hover:shadow-[#dfc18b]/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Authorizing Instant Access...</span>
              ) : (
                <>
                  <span>Complete Purchase • $19</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
