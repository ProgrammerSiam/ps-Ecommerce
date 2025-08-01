import React from "react";

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  height = "h-4",
  width = "w-full",
  rounded = "rounded",
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 ${height} ${width} ${rounded} ${className}`}
    />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <Skeleton height="h-5" width="w-3/4" />
        <div className="flex justify-between items-center">
          <Skeleton height="h-6" width="w-16" />
          <Skeleton height="h-4" width="w-20" rounded="rounded-full" />
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} height="h-4" width="w-4" rounded="rounded" />
          ))}
          <Skeleton height="h-4" width="w-8" className="ml-2" />
        </div>
        <Skeleton height="h-3" width="w-full" />
        <Skeleton height="h-3" width="w-2/3" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(8)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const HeaderSkeleton: React.FC = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Skeleton height="h-8" width="w-48" />
          <div className="hidden lg:flex items-center space-x-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height="h-4" width="w-16" />
            ))}
          </div>
          <div className="lg:hidden">
            <Skeleton height="h-6" width="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-4xl mb-4">
        <Skeleton height="h-12" width="w-12" rounded="rounded" />
      </div>
      <Skeleton height="h-6" width="w-3/4" className="mb-3" />
      <Skeleton height="h-4" width="w-full" className="mb-6" />
      <Skeleton height="h-12" width="w-28" rounded="rounded-xl" />
    </div>
  );
};

export const SearchBarSkeleton: React.FC = () => {
  return (
    <div className="relative">
      <Skeleton height="h-14" width="w-full" rounded="rounded-2xl" />
    </div>
  );
};

export const FilterSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-wrap gap-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} height="h-12" width="w-32" rounded="rounded-xl" />
        ))}
      </div>
      <div className="lg:ml-auto">
        <Skeleton height="h-12" width="w-40" rounded="rounded-xl" />
      </div>
    </div>
  );
};

export const CartItemSkeleton: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 border-b border-gray-200 pb-6 last:border-b-0">
      <Skeleton height="h-24" width="w-24" rounded="rounded-xl" />
      <div className="flex-1 min-w-0 space-y-2">
        <Skeleton height="h-5" width="w-3/4" />
        <Skeleton height="h-6" width="w-16" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton height="h-10" width="w-10" rounded="rounded-xl" />
        <Skeleton height="h-10" width="w-16" rounded="rounded-xl" />
        <Skeleton height="h-10" width="w-10" rounded="rounded-xl" />
      </div>
      <Skeleton height="h-6" width="w-16" />
      <Skeleton height="h-6" width="w-6" rounded="rounded-xl" />
    </div>
  );
};

export const CartPageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton height="h-10" width="w-48" className="mb-2" />
          <Skeleton height="h-6" width="w-64" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <CartItemSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100">
              <Skeleton height="h-8" width="w-32" className="mb-6" />
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <Skeleton height="h-4" width="w-20" />
                  <Skeleton height="h-6" width="w-16" />
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton height="h-4" width="w-20" />
                  <Skeleton height="h-4" width="w-12" />
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <Skeleton height="h-6" width="w-16" />
                    <Skeleton height="h-8" width="w-20" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Skeleton height="h-14" width="w-full" rounded="rounded-xl" />
                <Skeleton height="h-14" width="w-full" rounded="rounded-xl" />
                <Skeleton height="h-14" width="w-full" rounded="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Skeleton height="h-96" width="w-full" rounded="rounded-2xl" />
            <div className="flex space-x-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  height="h-20"
                  width="w-20"
                  rounded="rounded-xl"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Skeleton height="h-8" width="w-3/4" />
              <Skeleton height="h-6" width="w-16" />
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton
                    key={i}
                    height="h-5"
                    width="w-5"
                    rounded="rounded"
                  />
                ))}
                <Skeleton height="h-4" width="w-12" />
              </div>
              <Skeleton height="h-4" width="w-full" />
              <Skeleton height="h-4" width="w-2/3" />
            </div>

            <div className="space-y-4">
              <Skeleton height="h-12" width="w-32" rounded="rounded-xl" />
              <Skeleton height="h-14" width="w-full" rounded="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddProductSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton height="h-10" width="w-48" className="mb-2" />
          <Skeleton height="h-6" width="w-64" />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton height="h-5" width="w-24" />
                <Skeleton height="h-12" width="w-full" rounded="rounded-xl" />
              </div>
            ))}
            <div className="space-y-2">
              <Skeleton height="h-5" width="w-32" />
              <Skeleton height="h-32" width="w-full" rounded="rounded-xl" />
            </div>
            <div className="flex space-x-4 pt-4">
              <Skeleton height="h-14" width="w-32" rounded="rounded-xl" />
              <Skeleton height="h-14" width="w-32" rounded="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmptyCartSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <Skeleton
            height="h-32"
            width="w-32"
            rounded="rounded-full"
            className="mx-auto"
          />
          <Skeleton height="h-8" width="w-64" className="mx-auto" />
          <Skeleton height="h-6" width="w-96" className="mx-auto" />
          <Skeleton
            height="h-14"
            width="w-48"
            rounded="rounded-xl"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
