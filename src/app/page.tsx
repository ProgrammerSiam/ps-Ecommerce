"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { DashboardCardSkeleton } from "@/components/Skeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="animate-pulse bg-gray-200 h-12 w-96 mx-auto rounded-lg mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-2/3 mx-auto rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[...Array(3)].map((_, i) => (
            <DashboardCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center justify-center py-16 md:py-24">
          <div className="relative flex flex-col items-center w-full max-w-5xl">
            {/* Top Decorative Elements */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
                <div className="text-2xl text-yellow-400">✨</div>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-pink-400 rounded-full"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-center mb-6 flex items-center justify-center gap-4 relative">
              Welcome to E-Commerce Dashboard
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-gray-600 font-medium text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              Manage your products, view inventory, and handle orders with ease.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Large Hero Card - Full width on mobile/tablet, spans 8 columns on desktop */}
            <div className="md:col-span-2 lg:col-span-8 lg:row-span-2 group">
              <div className="h-72 md:h-80 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🛍️
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Discover Our Collection
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                    Explore our curated selection of premium products with
                    advanced filtering and personalized recommendations.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center space-x-3 bg-gray-900 text-white px-6 sm:px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base lg:text-lg font-semibold"
                >
                  <span>Shop Now</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side Cards - Stack on mobile, side by side on tablet, spans 4 columns on desktop */}
            <div className="md:col-span-1 lg:col-span-4 group">
              <div className="h-56 md:h-64 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-4xl sm:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    ✨
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    New Arrivals
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Latest products added to our store
                  </p>
                </div>
                <Link
                  href="/add-product"
                  className="inline-flex mt-2 items-center space-x-2 bg-gray-100 text-gray-700 px-4 sm:px-4 lg:px-6 py-3 lg:py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm lg:text-base font-medium"
                >
                  <span>Add Product</span>
                  <svg
                    className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-4 group">
              <div className="h-56 md:h-64 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-4xl sm:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🛒
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    Your Cart
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Review your selected items
                  </p>
                </div>
                <Link
                  href="/cart"
                  className="inline-flex mt-2 items-center space-x-2 bg-gray-100 text-gray-700 px-4 sm:px-4 lg:px-6 py-3 lg:py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm lg:text-base font-medium"
                >
                  <span>View Cart</span>
                  <svg
                    className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bento Grid Section */}
        <div className="py-16 md:py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Features
              </span>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Why Choose Our Dashboard?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of performance, design, and
              functionality
            </p>
          </div>

          {/* Features Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Large Feature Card - Full width on mobile/tablet, spans 6 columns on desktop */}
            <div className="md:col-span-2 lg:col-span-6 lg:row-span-2 group">
              <div className="h-72 md:h-80 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    ⚡
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Fast & Responsive
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                    Lightning-fast performance with smooth animations and
                    instant loading times. Optimized for speed and user
                    experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Medium Feature Cards - Stack on mobile, side by side on tablet */}
            <div className="md:col-span-1 lg:col-span-3 group">
              <div className="h-56 md:h-64 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-4xl sm:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🎨
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    Modern UI
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Beautiful and intuitive user interface with cutting-edge
                    design principles
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-3 group">
              <div className="h-56 md:h-64 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-4xl sm:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    🔒
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    Secure
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Built with enterprise-grade security and privacy protection
                    measures
                  </p>
                </div>
              </div>
            </div>

            {/* Large Feature Card - Mobile Ready */}
            <div className="md:col-span-2 lg:col-span-6 group">
              <div className="h-56 md:h-64 lg:h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="text-4xl sm:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    📱
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    Mobile Ready
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Fully responsive design optimized for all devices and screen
                    sizes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
