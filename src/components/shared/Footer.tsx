import React from "react";
import Image from "next/image"; 
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

// A reusable component for footer links to keep the code clean.
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-8 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand and Certification */}
          <div className="flex flex-col">
            <Image
              src="/logo.png"
              alt="Logo"
              width={96}
              height={32}
              className="mb-4"
            />
            <p className="text-gray-300 mb-6">
              Connect our specialist doctor <br />
              at any time from any where
            </p>
            <div className="w-40">
              <Image
                src="/legitscript-badge.png" 
                alt="LegitScript Certified"
                width={160} 
                height={80}  
              />
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Bangladesh&apos;s only LegitScript certified online healthcare platform
            </p>
          </div>

          {/* Column 2: Company & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  Careers
                  <span className="ml-2 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-sm">
                    We are hiring
                  </span>
                </a>
              </li>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-and-conditions">
                Terms and Conditions
              </FooterLink>
              <FooterLink href="/return-and-refund-policy">
                Return and Refund Policy
              </FooterLink>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/order-medicine">Order Medicine</FooterLink>
              <FooterLink href="/healthcare-products">
                Healthcare Products
              </FooterLink>
              <FooterLink href="/lab-tests">Lab Tests</FooterLink>
              <FooterLink href="/beauty">Beauty</FooterLink>
            </ul>
          </div>

          {/* Column 3: Useful Links & App Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/account">Account</FooterLink>
              <FooterLink href="/register-pharmacy">
                Register the Pharmacy
              </FooterLink>
              <FooterLink href="/special-offers">Special Offers</FooterLink>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8">
              Download Our App
            </h3>
            <div className="flex flex-col space-y-4">
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                />
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Address: Banani, Dhaka-1216
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Hot Line:{" "}
              <a href="tel:8801754800757" className="hover:text-white">
                8801754800757
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Whatsapp:{" "}
              <a
                href="https://wa.me/8801754800757"
                className="hover:text-white"
              >
                8801754800757
              </a>
            </p>

            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-base font-semibold mb-3">Pay With</h4>
              <Image
                src="/payment-methods.png"
                alt="Payment Methods"
                width={600}
                height={120}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-base font-semibold mb-2">Verified By</h4>
              <Image
                src="/sslcommerz-logo.png"
                alt="Verified by SSLCommerz"
                width={112}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center lg:flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            Trade License: TRAD/DNCC/057602/2022
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy;2025 Yasribe Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        className="absolute bottom-8 right-8 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
      >
        <FiChevronUp className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
