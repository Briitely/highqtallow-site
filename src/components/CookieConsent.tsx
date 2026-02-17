import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'hqt_cookie_consent';
const TWELVE_MONTHS_MS = 365 * 24 * 60 * 60 * 1000;

function hasValidConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const { timestamp } = JSON.parse(raw);
    return Date.now() - timestamp < TWELVE_MONTHS_MS;
  } catch {
    return false;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasValidConsent()) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ accepted: true, timestamp: Date.now() })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-2xl mx-auto bg-midnight border border-white/10 rounded-2xl shadow-2xl shadow-black/30 px-6 py-5 sm:px-8 sm:py-6 animate-fade-in-up">
        <p className="font-body text-sm text-white/70 leading-relaxed">
          We use cookies and similar technologies for site functionality, analytics, and
          advertising. By clicking Accept, you agree to our use of cookies as described in
          our{' '}
          <Link
            to="/privacy-policy"
            className="text-lavender hover:text-lavender-light underline underline-offset-2 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleAccept}
            className="font-body text-sm font-semibold bg-lavender hover:bg-lavender-dark text-midnight px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-lavender/20"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
