import { useState } from "react";
import {
  ArrowLeft,
  Bitcoin,
  Copy,
  Upload,
  CheckCircle,
  AlertCircle,
  Wallet,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const Deposit = () => {
  const [btc, setBtc] = useState(false);
  const [eth, setEth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isBtcPay, setIsBtcPay] = useState(false);
  const [isEthPay, setIsEthPay] = useState(false);
  const [direct, setDirect] = useState(false);
  const [isPayed, setIsPayed] = useState(false);
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("Choose file");
  const [exchangeRateBTC, setExchangeRateBTC] = useState(67000);
  const [exchangeRateETH, setExchangeRateETH] = useState(3200);
  const [copied, setCopied] = useState(false);

  console.log(mode, setExchangeRateBTC, setExchangeRateETH);

  const handleSelectBtc = () => {
    setBtc(true);
    setEth(false);
    setIsEthPay(false);
    setIsBtcPay(true);
  };

  const handleSelectEth = () => {
    setBtc(false);
    setEth(true);
    setIsEthPay(true);
    setIsBtcPay(false);
  };

  const handleProceed = () => {
    if (!/^[0-9]+$/.test(amount)) {
      alert("Amount must be a number only");
    } else if (!amount || (!btc && !eth)) {
      alert("Please select a cryptocurrency and enter the amount to deposit!");
    } else {
      setDirect(true);
    }
  };

  const handleBack = () => {
    setDirect(false);
    setAmount("");
    setBtc(false);
    setEth(false);
    setIsEthPay(false);
    setIsBtcPay(false);
    setSelectedFile(null);
    setSelectedFileName("Choose file");
    setIsPayed(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    if (files) {
      setSelectedFile(files);
      setSelectedFileName(files.name);
    }
  };

  const handleIsPayed = () => {
    setIsPayed(true);
    if (btc === true) {
      setMode("btc");
    } else {
      setMode("eth");
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Deposit submitted successfully!");
      handleBack();
    }, 2000);
  };

  const handleCopyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const floatVariable = parseFloat(amount) || 0;
  const totalBtc = floatVariable / exchangeRateBTC;
  const totalEth = floatVariable / exchangeRateETH;
  const roundedTotalBtc = parseFloat(totalBtc.toFixed(8));
  const roundedTotalEth = parseFloat(totalEth.toFixed(6));

  const btcAddress = "1Gw2E77fiNsLDLgaFLCYEGa5gLzDsq53eq";
  const ethAddress = "0x742d35Cc7438C0532793ddddd19c7d";

  if (direct && (isBtcPay || isEthPay)) {
    const isEth = isEthPay;
    const cryptoAmount = isEth ? roundedTotalEth : roundedTotalBtc;
    const cryptoSymbol = isEth ? "ETH" : "BTC";
    const exchangeRate = isEth ? exchangeRateETH : exchangeRateBTC;
    const address = isEth ? ethAddress : btcAddress;

    return (
      <div className="w-full max-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 overflow-y-auto">
        <div className="max-w-2xl  mx-auto py-5">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to deposit</span>
          </button>

          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl h-[65rem]">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Transaction Details
              </h2>
              <p className="text-white/70">
                Complete your {cryptoSymbol} deposit
              </p>
            </div>

            {/* Transaction Info */}
            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">
                  {cryptoAmount} {cryptoSymbol}
                </div>
                <div className="text-lg text-white/60">
                  for ${amount}.00 USD
                </div>
                <div className="text-sm text-white/40 mt-2">
                  Exchange rate: 1 {cryptoSymbol} = $
                  {exchangeRate.toLocaleString()} USD
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-8">
              <div className="text-white/80 text-sm font-medium mb-3">
                Send {cryptoSymbol} to this address:
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-white/90 flex-1 mr-4 break-all">
                    {address}
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(address)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      copied
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm font-medium">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-2 flex items-center justify-center">
                    <Bitcoin className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500">QR Code</div>
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            {isPayed && (
              <div className="mb-8 animate-fadeIn">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                    <div>
                      <p className="text-amber-200 text-sm font-medium">
                        Upload proof of payment
                      </p>
                      <p className="text-amber-200/70 text-xs mt-1">
                        Accepted formats: JPG, PNG, GIF, PDF (Max 10MB)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/gif,application/pdf"
                    className="hidden"
                    onChange={handleFileChange}
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="flex items-center justify-center w-full h-16 border-2 border-dashed border-white/30 rounded-xl hover:border-white/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 text-white/70 group-hover:text-white/90 transition-colors">
                      <Upload className="w-5 h-5" />
                      <span className="font-medium">{selectedFileName}</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-center">
              {isPayed ? (
                <button
                  onClick={handleSubmit}
                  disabled={loading || !selectedFile}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      <span>Submit Proof</span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleIsPayed}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>I have sent the payment</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Add Funds
          </h1>
          <p className="text-lg text-white/70">
            Deposit cryptocurrency to your trading balance
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Amount Input */}
          <div className="mb-8">
            <label className="block text-white/80 text-sm font-medium mb-3">
              Deposit Amount (USD)
            </label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                className="w-full h-16 bg-white/5 border border-white/20 rounded-xl px-6 text-white text-lg placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 font-medium">
                USD
              </div>
            </div>
            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>Minimum: $50.00</span>
              <span>Maximum: $50,000.00</span>
            </div>
          </div>

          {/* Cryptocurrency Selection */}
          <div className="mb-8">
            <label className="block text-white/80 text-sm font-medium mb-4">
              Select Cryptocurrency
            </label>
            <div className="space-y-3">
              {/* Bitcoin Option */}
              <div
                onClick={handleSelectBtc}
                className={`relative p-4 rounded-xl cursor-pointer transition-all border-2 ${
                  btc
                    ? "border-orange-400 bg-orange-400/10"
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        btc ? "bg-orange-400" : "bg-orange-400/20"
                      }`}
                    >
                      <Bitcoin
                        className={`w-6 h-6 ${
                          btc ? "text-white" : "text-orange-400"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Bitcoin</div>
                      <div className="text-sm text-white/60">
                        BTC • ${exchangeRateBTC.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      btc
                        ? "border-orange-400 bg-orange-400"
                        : "border-white/30"
                    }`}
                  >
                    {btc && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                {btc && (
                  <div className="mt-3 pt-3 border-t border-orange-400/30">
                    <div className="text-sm text-orange-200">
                      You will receive: {roundedTotalBtc} BTC
                    </div>
                  </div>
                )}
              </div>

              {/* Ethereum Option */}
              <div
                onClick={handleSelectEth}
                className={`relative p-4 rounded-xl cursor-pointer transition-all border-2 ${
                  eth
                    ? "border-blue-400 bg-blue-400/10"
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        eth ? "bg-blue-400" : "bg-blue-400/20"
                      }`}
                    >
                      <Zap
                        className={`w-6 h-6 ${
                          eth ? "text-white" : "text-blue-400"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ethereum</div>
                      <div className="text-sm text-white/60">
                        ETH • ${exchangeRateETH.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      eth ? "border-blue-400 bg-blue-400" : "border-white/30"
                    }`}
                  >
                    {eth && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                {eth && (
                  <div className="mt-3 pt-3 border-t border-blue-400/30">
                    <div className="text-sm text-blue-200">
                      You will receive: {roundedTotalEth} ETH
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleProceed}
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!amount || (!btc && !eth)}
          >
            Continue to Payment
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Deposit;
