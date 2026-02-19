import React from 'react'
import { Clock, Lock, RotateCcw, Truck } from "lucide-react"

function Feature() {
  const features = [
    { icon: Truck, text: "Free shipping", subtext: "On orders over $100" },
    { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
    { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
    { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" }
  ]

  return (
    <div className='py-8 bg-[#060610] font-serif px-8 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8'>
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-3">
                <Icon className='h-10 w-10 text-gray-400' aria-hidden="true" />
                <div>
                  <p className="text-white font-medium">{item.text}</p>
                  <p className="text-gray-400 text-sm">{item.subtext}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feature
