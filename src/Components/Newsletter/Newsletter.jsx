export default function Newsletter() {
  return (
    <section className="w-full bg-gradient-to-r from-primary via-blue-600 to-indigo-700 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <i className="fa-solid fa-envelope text-3xl text-white"></i>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg">
          Get CourtReserve Updates
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Never miss new courts, exclusive offers & tournament alerts
        </p>

        {/* Form */}
        <form className="flex flex-col lg:flex-row items-stretch gap-4 max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20">
          <input
            type="email"
            placeholder="your.email@courtreserve.com"
            className="flex-1 px-6 py-5 bg-white/80 text-gray-900 placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/50 font-medium text-lg border-0 shadow-lg"
            required
          />
          <button
            type="submit"
            className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-primary font-black text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:from-gray-50 transition-all duration-300 border-0"
          >
            Join Now
          </button>
        </form>

        {/* Trust Badge */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-lock text-xs text-green-900"></i>
            </div>
            <span>100% Privacy Protected</span>
          </div>
          <span>•</span>
          <span>10K+ Active Members</span>
        </div>
      </div>
    </section>
  );
}
