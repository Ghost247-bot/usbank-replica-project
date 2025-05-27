
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart, PieChart, TrendingUp, Target, CheckCircle, DollarSign, Eye, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PortfolioAnalysis = () => {
  const keyFeatures = [
    {
      icon: BarChart,
      title: "Performance Analysis",
      description: "Comprehensive review of your portfolio's historical performance and risk-adjusted returns."
    },
    {
      icon: PieChart,
      title: "Asset Allocation Review",
      description: "Analysis of your current asset allocation and recommendations for optimization."
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Detailed evaluation of portfolio risk factors and alignment with your risk tolerance."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Identification of potential areas for portfolio enhancement and growth optimization."
    }
  ];

  const benefits = [
    "Comprehensive portfolio review",
    "Performance benchmarking",
    "Risk analysis and mitigation",
    "Asset allocation optimization",
    "Fee analysis and reduction",
    "Rebalancing recommendations"
  ];

  const analysisTypes = [
    {
      title: "Risk Analysis",
      description: "Evaluate your portfolio's risk profile and volatility measures",
      features: ["Standard deviation analysis", "Beta coefficient review", "Value at Risk calculations"]
    },
    {
      title: "Performance Review", 
      description: "Comprehensive analysis of returns and performance metrics",
      features: ["Return attribution analysis", "Benchmark comparisons", "Sharpe ratio calculations"]
    },
    {
      title: "Cost Analysis",
      description: "Review of all fees and expenses impacting your returns",
      features: ["Expense ratio analysis", "Transaction cost review", "Fee optimization strategies"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Portfolio Analysis
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Get detailed insights into your investment portfolio with our comprehensive analysis services designed to optimize your investment strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Request Analysis
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    View Sample Report
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">What We Analyze</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Portfolio performance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Risk exposure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Asset allocation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Cost efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Analysis Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive portfolio analysis provides you with detailed insights and actionable recommendations to optimize your investment strategy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Analysis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our portfolio analysis covers multiple dimensions to provide you with a complete picture of your investment performance and opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {analysisTypes.map((analysis, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{analysis.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{analysis.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {analysis.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Portfolio Analysis Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our detailed portfolio analysis helps you make informed investment decisions and optimize your portfolio for better performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Eye className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Clear Insights</h3>
                      <p className="text-blue-200">Easy-to-understand analysis reports</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Cost Optimization</h3>
                      <p className="text-blue-200">Identify and reduce unnecessary fees</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <FileText className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Detailed Reports</h3>
                      <p className="text-blue-200">Comprehensive written analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Analyze Your Portfolio?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get professional insights into your investment portfolio with our comprehensive analysis services. Schedule your review today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Request Analysis
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Sample Report
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioAnalysis;
