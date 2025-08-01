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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            {/* Decorative Elements */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
                <div className="text-2xl text-gray-400">✨</div>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-pink-400 rounded-full"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in relative">
              <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-3xl text-blue-400 opacity-60">
                🚀
              </span>
              Welcome to E-Commerce Dashboard
              <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-3xl text-pink-400 opacity-60">
                💎
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 animate-fade-in-delay max-w-4xl mx-auto leading-relaxed">
              Manage your products, view inventory, and handle orders with ease.
            </p>

            {/* Bottom Decorative Elements */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
                <div className="text-lg text-gray-400">⚡</div>
                <div className="w-12 h-1 bg-gradient-to-l from-pink-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px] mb-16">
          {/* Large Hero Card - Spans 2 rows and 4 columns */}
          <div className="md:col-span-4 lg:col-span-6 md:row-span-2 group">
            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🛍️
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Discover Our Collection
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore our curated selection of premium products with
                  advanced filtering and personalized recommendations.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="font-semibold">Shop Now</span>
                <svg
                  className="w-5 h-5"
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

          {/* Medium Card - Spans 2 columns and 1 row */}
          <div className="md:col-span-2 lg:col-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  New Arrivals
                </h3>
                <p className="text-gray-600 text-sm">
                  Latest products added to our store
                </p>
              </div>
              <Link
                href="/add-product"
                className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm"
              >
                <span>Add Product</span>
                <svg
                  className="w-4 h-4"
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

          {/* Small Card - Spans 2 columns and 1 row */}
          <div className="md:col-span-2 lg:col-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  🛒
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your Cart
                </h3>
                <p className="text-gray-600 text-sm">
                  Review your selected items
                </p>
              </div>
              <Link
                href="/cart"
                className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm"
              >
                <span>View Cart</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Additional Card 1 - Analytics */}
          <div className="md:col-span-2 lg:col-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Store Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Track your store performance
                </p>
              </div>
              <Link
                href="/analytics"
                className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm"
              >
                <span>View Insights</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Additional Card 2 - Orders */}
          <div className="md:col-span-2 lg:col-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 flex flex-col justify-between border border-gray-100">
              <div>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Order History
                </h3>
                <p className="text-gray-600 text-sm">Manage your orders</p>
              </div>
              <Link
                href="/orders"
                className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm"
              >
                <span>View Orders</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Features
              </span>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Why Choose Our Dashboard?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of performance, design, and
              functionality
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fast & Responsive */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast & Responsive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lightning-fast performance with smooth animations and instant
                  loading times
                </p>
                <div className="mt-4 flex items-center text-sm text-orange-600 font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>

            {/* Modern UI */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Modern UI
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Beautiful and intuitive user interface with cutting-edge
                  design principles
                </p>
                <div className="mt-4 flex items-center text-sm text-pink-600 font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>

            {/* Secure */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built with enterprise-grade security and privacy protection
                  measures
                </p>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>

            {/* Mobile Ready */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mobile Ready
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully responsive design optimized for all devices and screen
                  sizes
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
