export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 border border-cyan-500 rounded-3xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-4xl font-black text-cyan-400 mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-300 mb-6">
          Your order has been confirmed successfully.
        </p>

        <div className="bg-black/40 rounded-2xl p-4 border border-gray-700 mb-6">
          <p className="text-sm text-gray-400">
            The seller will now prepare and ship your product.
          </p>

          <p className="text-sm text-cyan-400 mt-3">
            Beylens service fee was included automatically.
          </p>
        </div>

        <a
          href="/"
          className="w-full inline-block bg-cyan-500 text-black font-black py-4 rounded-2xl hover:bg-cyan-400 transition"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
}
