import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import ContactCTA from "../../Components/Contact";

export default function AIAutomation() {
    return (
        <main>
            {/* Hero Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <Image
                    src="/assets/services/ai.jpg"
                    alt="AI Automation Services"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                        AI Automation
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
                        At Enid Innovations, we harness the power of artificial intelligence to automate complex processes,
                        enhance decision-making, and drive efficiency. From intelligent chatbots to predictive analytics,
                        our AI solutions transform how your business operates.
                    </p>
                </div>
            </div>

            {/* Intro Paragraph */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    At Enid Innovations, we deliver cutting-edge AI automation solutions that streamline operations,
                    reduce manual effort, and unlock new possibilities for growth. Our team combines deep technical
                    expertise with business acumen to build intelligent systems that learn, adapt, and deliver
                    measurable results.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/assets/services/ai.jpg"
                        alt="AI Automation"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6a6b] mb-6">
                        Our AI Automation Expertise
                    </h2>

                    <ul className="space-y-6 text-gray-700 text-base md:text-lg">
                        {/* Intelligent Process Automation */}
                        <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
                            <h3 className="font-semibold text-[#0b6a6b] mb-3">
                                Intelligent Process Automation
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Workflow Automation & Optimization</li>
                                <li>Document Processing & OCR</li>
                                <li>Data Extraction & Validation</li>
                            </ul>
                        </li>

                        {/* AI Chatbots */}
                        <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
                            <h3 className="font-semibold text-[#0b6a6b] mb-3">
                                AI Chatbots & Virtual Assistants
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Customer Support Bots</li>
                                <li>Internal Knowledge Assistants</li>
                                <li>Multi-Channel Integration (Web, WhatsApp, Slack)</li>
                            </ul>
                        </li>

                        {/* Predictive Analytics */}
                        <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
                            <h3 className="font-semibold text-[#0b6a6b] mb-3">Predictive Analytics & ML Models</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>Custom Machine Learning Model Development</li>
                                <li>Forecasting & Trend Analysis</li>
                                <li>Recommendation Systems</li>
                            </ul>
                        </li>

                        {/* Integration & Deployment */}
                        <li className="bg-gray-50 rounded-lg shadow-sm p-5 hover:bg-[#0b6a6b]/10 transition-all duration-300">
                            <h3 className="font-semibold text-[#0b6a6b] mb-3">Integration & Deployment</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                <li>API Development & Integration</li>
                                <li>Cloud Deployment (AWS, Azure, GCP)</li>
                                <li>Monitoring, Maintenance & Continuous Learning</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b6a6b] mb-10">
                    Why Choose Enid Innovations for AI Automation?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We leverage the latest AI frameworks, models, and tools to deliver state-of-the-art automation solutions.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Every AI system is tailored to your specific business needs, workflows, and objectives.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our solutions are built to scale with your business, handling increased load and complexity seamlessly.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our AI specialists bring deep expertise in machine learning, natural language processing, and automation.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We focus on delivering measurable ROI through reduced costs, improved efficiency, and enhanced customer experiences.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-[#0b6a6b]">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Support</h3>
                        <p className="text-gray-700 leading-relaxed">
                            From initial consultation to deployment and ongoing maintenance, we&apos;re with you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
