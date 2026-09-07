import React, { useState } from 'react';
import { X, Check, Lock, ShieldCheck, Download, BookOpen, ArrowRight, CreditCard, Tag, Sparkles } from 'lucide-react';

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
  const [submissionError, setSubmissionError] = useState('');

  // Coupon state
  const [couponInput, setCouponInput] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponInput.trim().toLowerCase() === 'book') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setCouponApplied(false);
    setCouponInput('');
    setCouponError('');
  };

  const isFree = couponApplied;
  const originalPrice = 19;
  const currentPrice = isFree ? 0 : originalPrice;

  // Digital book PDF original file path (accessible strictly when BOOK coupon is validated)
  const originalFileName = "Daniel_The_Things_People_Feel_But_Never_Say_MAXIMUM_PREMIUM.pdf";
  const bookPdfUrl = `/${originalFileName}`;

  // Strict check: book access is authorized ONLY when the BOOK coupon is validated and price is $0
  const isBookCouponAuthorized = couponApplied && couponInput.trim().toLowerCase() === 'book' && isFree && currentPrice === 0;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError('');

    if (!name.trim()) {
      setSubmissionError('Please enter your name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubmissionError('Please enter a valid email address.');
      return;
    }

    // If BOOK coupon is validated and customer claims free access, unlock book download option
    if (isBookCouponAuthorized) {
      setIsPurchased(true);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPurchased(true);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md md:max-w-lg bg-[#15131b] border border-[#342e40] rounded-xl sm:rounded-2xl shadow-2xl text-[#ede7dc] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Compact and accessible */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-[#2a2533] flex items-center justify-between bg-[#191720] flex-shrink-0">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfc18b]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#dfc18b]">
              {isFree ? 'Free Access Pass' : 'Secure Checkout • 256-Bit SSL'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#231f2c] hover:bg-[#2e293a] text-[#c9c0b0] hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {isPurchased ? (
            /* SUCCESS STATE */
            <div className="p-5 sm:p-7 space-y-5 text-center animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#dfc18b]/20 text-[#dfc18b] flex items-center justify-center mx-auto border border-[#dfc18b]/40">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl font-medium text-[#fbf8f2]">
                  Welcome, {name || 'Reader'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#bab09f]">
                  Your full edition of <span className="text-[#dfc18b] italic font-serif">The Things People Feel... But Never Say</span> is unlocked. Sent to <strong className="text-white">{email || 'your email'}</strong>.
                </p>
              </div>

              {/* Download Book Access - strictly conditional on BOOK coupon validation */}
              {isBookCouponAuthorized ? (
                <div className="p-4 bg-[#15231a] rounded-lg border border-[#235835] space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ade80] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      BOOK Coupon Validated • Instant Download Unlocked
                    </span>
                  </div>

                  <a
                    id="download-book-btn"
                    href={bookPdfUrl}
                    download={originalFileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#4ade80] hover:bg-[#6ee7b7] text-[#0c2415] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD THE BOOK</span>
                  </a>

                  <p className="text-[11px] text-[#86efac] text-center">
                    Direct download of the complete 19-page edition ({originalFileName}).
                  </p>
                </div>
              ) : (
                <div className="p-3.5 bg-[#1b1822] rounded-lg border border-[#2e2938] space-y-2 text-left">
                  <p className="text-xs text-[#bab09f]">
                    Order confirmed. A confirmation receipt has been dispatched to <strong className="text-white">{email}</strong>.
                  </p>
                </div>
              )}

              {/* Read now action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenReader();
                  }}
                  className="w-full py-3 bg-[#dfc18b] hover:bg-[#ebd3a6] text-[#121014] font-semibold text-xs tracking-wider uppercase rounded shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Digital Reader Now</span>
                </button>
                
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 bg-[#231f2c] hover:bg-[#2d2838] text-[#c7beaf] font-semibold text-xs tracking-wider uppercase rounded cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handlePurchase} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              
              {/* Product Summary Row */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1b1923] border border-[#2d2737]">
                <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0 border border-[#4a3f2d] shadow">
                  <img
                    src="https://i.imgur.com/6TLICsT.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/book-cover.jpg";
                    }}
                    alt="Book preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 text-left min-w-0">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#dfc18b] block">
                    Author Edition • Instant Access
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#f5f1e8] leading-snug truncate">
                    THE THINGS PEOPLE FEEL... BUT NEVER SAY
                  </h4>
                  <p className="text-[11px] text-[#a39785]">
                    PDF + EPUB + 30-Day Guide
                  </p>
                </div>

                <div className="text-right flex-shrink-0 pl-1">
                  {isFree ? (
                    <div>
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="text-xs text-[#8f8574] line-through font-semibold">
                          $19
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#4ade80]">
                          $0
                        </span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-[#4ade80] block">
                        Free (Coupon)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#dfc18b] block">
                        $19
                      </span>
                      <span className="text-[10px] text-[#7a7263] line-through block">
                        $38 Regular
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coupon Code Section */}
              <div className="p-2.5 rounded-lg bg-[#191621] border border-[#2e283b] text-left">
                {couponApplied ? (
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 text-[#4ade80] flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-semibold text-[#4ade80]">Coupon 'book' applied</span>
                        <span className="text-[11px] text-[#9e9484] block">100% discount applied ($19 → $0)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-[11px] text-[#b8a68b] hover:text-white underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-[#c7beaf] flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#dfc18b]" />
                        <span>Have a Promo Code?</span>
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter coupon code (try: book)"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          if (couponError) setCouponError('');
                        }}
                        className="flex-1 px-3 py-1.5 rounded bg-[#201c29] border border-[#373042] text-xs text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b] uppercase tracking-wider"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="px-3.5 py-1.5 bg-[#dfc18b] hover:bg-[#edd5aa] text-[#121014] font-bold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[11px] text-[#f87171] mt-1">{couponError}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Customer Information */}
              <div className="space-y-2 text-left">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#b8ada0] block">
                  Delivery Details
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#1f1b27] border border-[#352f40] text-xs sm:text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email for book delivery"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#1f1b27] border border-[#352f40] text-xs sm:text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method / Free Pass banner */}
              {isFree ? (
                /* Free via coupon: Payment crossed out completely, zero payment needed */
                <div className="p-3.5 rounded-lg bg-[#141d17] border border-[#1e462c] text-left space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#4ade80]" />
                      <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-wider">
                        No Payment Required
                      </span>
                    </div>
                    <span className="text-xs text-[#8f8574] line-through font-mono">
                      Card / Payment
                    </span>
                  </div>
                  <p className="text-xs text-[#a3c9ae] leading-relaxed">
                    The price is <strong>$0.00</strong> with coupon code <strong>book</strong>. Click below to unlock your instant digital download and reader access immediately.
                  </p>
                </div>
              ) : (
                /* Standard Payment Method selector */
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#b8ada0]">
                      Payment Method
                    </label>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`py-2 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 border transition-all cursor-pointer ${
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
                      className={`py-2 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 border transition-all cursor-pointer ${
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
                      className={`py-2 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 border transition-all cursor-pointer ${
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
                        className="w-full px-3 py-2 rounded bg-[#1f1b27] border border-[#352f40] text-xs sm:text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="MM / YY"
                          defaultValue="12/28"
                          className="w-full px-3 py-2 rounded bg-[#1f1b27] border border-[#352f40] text-xs sm:text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          defaultValue="888"
                          className="w-full px-3 py-2 rounded bg-[#1f1b27] border border-[#352f40] text-xs sm:text-sm text-[#f1ece1] placeholder-[#796f61] focus:outline-none focus:border-[#dfc18b]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Guarantee note */}
              <div className="p-2.5 bg-[#110f16] rounded border border-[#231f2a] flex items-center gap-2.5 text-[11px] text-[#a09584] text-left">
                <ShieldCheck className="w-4 h-4 text-[#dfc18b] flex-shrink-0" />
                <span>
                  Instant access sent immediately upon confirmation. 100% satisfaction guaranteed.
                </span>
              </div>

              {submissionError && (
                <p className="text-xs text-[#f87171] text-center font-medium bg-[#2a1717] border border-[#522121] py-2 px-3 rounded">
                  {submissionError}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3.5 font-semibold text-xs tracking-widest uppercase rounded shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 ${
                  isFree
                    ? 'bg-[#4ade80] hover:bg-[#6ee7b7] text-[#0d2818] shadow-[#4ade80]/20'
                    : 'bg-[#dfc18b] hover:bg-[#ebd4aa] text-[#121014] shadow-[#dfc18b]/20'
                }`}
              >
                {isProcessing ? (
                  <span>Unlocking Access...</span>
                ) : isFree ? (
                  <>
                    <span>CLAIM FREE BOOK ACCESS. $0</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
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
    </div>
  );
};

