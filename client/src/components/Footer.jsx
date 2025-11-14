import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-light tracking-wide mb-3">Lenzia</h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Capturing stories with emotion, light, and timeless artistry.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-5">
                            <a className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition">
                                <FaInstagram size={18} />
                            </a>
                            <a className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition">
                                <FaFacebookF size={18} />
                            </a>
                            <a className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition">
                                <FaYoutube size={18} />
                            </a>
                            <a className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition">
                                <FaEnvelope size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigate</h3>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="hover:text-white transition">Home</li>
                            <li className="hover:text-white transition">About Us</li>
                            <li className="hover:text-white transition">Portfolio</li>
                            <li className="hover:text-white transition">Services</li>
                            <li className="hover:text-white transition">Contact</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="hover:text-white transition">Fashion Shoot</li>
                            <li className="hover:text-white transition">Event Coverage</li>
                            <li className="hover:text-white transition">Bold Portraits</li>
                            <li className="hover:text-white transition">Travel Stories</li>
                            <li className="hover:text-white transition">Couple Sessions</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay In Touch</h3>
                        <p className="text-white/60 text-sm mb-4">
                            Subscribe for updates, offers & behind-the-scenes stories.
                        </p>

                        <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none border-none px-4 py-2 text-sm w-full text-white placeholder-white/40"
                            />
                            <button className="px-5 py-2 bg-pink-500 text-black font-semibold hover:bg-pink-400 transition">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-10"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
                    <p>© 2025 Lenzia Studio. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 text-white/50">
                        Developed By{" "}
                        <a
                            href="https://www.musitechhub.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300 transition"
                        >
                            MusiTechHub
                        </a>
                    </p>

                </div>

            </div>
        </footer>
    );
}
