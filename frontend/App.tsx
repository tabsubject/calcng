import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLoader } from './components/PageLoader';
import { HomePage } from './pages/HomePage';

// Category pages
import { EngineCategoryPage } from './pages/categories/EngineCategoryPage';
import { FuelCategoryPage } from './pages/categories/FuelCategoryPage';
import { EvCategoryPage } from './pages/categories/EvCategoryPage';
import { ConversionsCategoryPage } from './pages/categories/ConversionsCategoryPage';
import { LoansCategoryPage } from './pages/categories/LoansCategoryPage';
import { TiresCategoryPage } from './pages/categories/TiresCategoryPage';

// Engine calculators
import { EngineHorsepowerPage } from './pages/engine/EngineHorsepowerPage';
import { EngineTorquePage } from './pages/engine/EngineTorquePage';
import { EngineDisplacementPage } from './pages/engine/EngineDisplacementPage';
import { CompressionRatioPage } from './pages/engine/CompressionRatioPage';
import { CarburetorCfmPage } from './pages/engine/CarburetorCfmPage';

// Fuel calculators
import { FuelCostPage } from './pages/fuel/FuelCostPage';
import { GasMileagePage } from './pages/fuel/GasMileagePage';
import { FuelInjectorFlowPage } from './pages/fuel/FuelInjectorFlowPage';
import { FuelFlowConversionPage } from './pages/fuel/FuelFlowConversionPage';
import { FuelSavingsPage } from './pages/fuel/FuelSavingsPage';

// EV calculators
import { EvChargingCostPage } from './pages/ev/EvChargingCostPage';
import { EvChargingTimePage } from './pages/ev/EvChargingTimePage';
import { EvFuelSavingsPage } from './pages/ev/EvFuelSavingsPage';

// Unit conversion calculators
import { SpeedConversionPage } from './pages/conversions/SpeedConversionPage';
import { TorqueConversionPage } from './pages/conversions/TorqueConversionPage';
import { FuelEconomyConversionPage } from './pages/conversions/FuelEconomyConversionPage';
import { ElectricEfficiencyConversionPage } from './pages/conversions/ElectricEfficiencyConversionPage';

// Loan calculators
import { AutoLoanPage } from './pages/loans/AutoLoanPage';
import { LeaseCalculatorPage } from './pages/loans/LeaseCalculatorPage';
import { LeaseBuyComparisonPage } from './pages/loans/LeaseBuyComparisonPage';

// Tire calculators
import { TireSizePage } from './pages/tires/TireSizePage';
import { SpeedometerErrorPage } from './pages/tires/SpeedometerErrorPage';
import { TireSizeComparisonPage } from './pages/tires/TireSizeComparisonPage';

// Blog pages
import { BlogHomePage } from './pages/blog/BlogHomePage';
import { EngineTorqueAllYouNeedToKnowPage } from './pages/blog/EngineTorqueAllYouNeedToKnowPage';
import { TorqueVsHorsepowerTheDifferencesPage } from './pages/blog/TorqueVsHorsepowerTheDifferencesPage';
import { WhatGearConsumesLessFuelPage } from './pages/blog/WhatGearConsumesLessFuelPage';
import { CarburetorvsFuelInjectionPage } from './pages/blog/CarburetorvsFuelInjectionPage';
import { DoesACIncreaseFuelConsumptionPage } from './pages/blog/DoesACIncreaseFuelConsumptionPage';
import { HowToReadTireSizePage } from './pages/blog/HowToReadTireSizePage';
import { HowToReduceFuelConsumptionPage } from './pages/blog/HowToReduceFuelConsumptionPage';
import { UnderstandingCarburetorAllYouShouldKnowPage } from './pages/blog/UnderstandingCarburetorAllYouShouldKnowPage';
import { WhyDoesMySpeedometerReadFasterPage } from './pages/blog/WhyDoesMySpeedometerReadFasterPage';

// Legal pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/legal/TermsOfServicePage';
import { AboutUsPage } from './pages/legal/AboutUsPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Category pages */}
            <Route path="/engine" element={<EngineCategoryPage />} />
            <Route path="/fuel" element={<FuelCategoryPage />} />
            <Route path="/ev" element={<EvCategoryPage />} />
            <Route path="/conversions" element={<ConversionsCategoryPage />} />
            <Route path="/loans" element={<LoansCategoryPage />} />
            <Route path="/tires" element={<TiresCategoryPage />} />
            
            {/* Engine calculators */}
            <Route path="/engine/horsepower" element={<EngineHorsepowerPage />} />
            <Route path="/engine/torque" element={<EngineTorquePage />} />
            <Route path="/engine/displacement" element={<EngineDisplacementPage />} />
            <Route path="/engine/compression-ratio" element={<CompressionRatioPage />} />
            <Route path="/engine/carburetor-cfm" element={<CarburetorCfmPage />} />
            
            {/* Fuel calculators */}
            <Route path="/fuel/cost" element={<FuelCostPage />} />
            <Route path="/fuel/gas-mileage" element={<GasMileagePage />} />
            <Route path="/fuel/injector-flow" element={<FuelInjectorFlowPage />} />
            <Route path="/fuel/flow-conversion" element={<FuelFlowConversionPage />} />
            <Route path="/fuel/savings" element={<FuelSavingsPage />} />
            
            {/* EV calculators */}
            <Route path="/ev/charging-cost" element={<EvChargingCostPage />} />
            <Route path="/ev/charging-time" element={<EvChargingTimePage />} />
            <Route path="/ev/fuel-savings" element={<EvFuelSavingsPage />} />
            
            {/* Unit conversions */}
            <Route path="/conversions/speed" element={<SpeedConversionPage />} />
            <Route path="/conversions/torque" element={<TorqueConversionPage />} />
            <Route path="/conversions/fuel-economy" element={<FuelEconomyConversionPage />} />
            <Route path="/conversions/electric-efficiency" element={<ElectricEfficiencyConversionPage />} />
            
            {/* Loan calculators */}
            <Route path="/loans/auto" element={<AutoLoanPage />} />
            <Route path="/loans/lease" element={<LeaseCalculatorPage />} />
            <Route path="/loans/lease-vs-buy" element={<LeaseBuyComparisonPage />} />
            
            {/* Tire calculators */}
            <Route path="/tires/size" element={<TireSizePage />} />
            <Route path="/tires/speedometer-error" element={<SpeedometerErrorPage />} />
            <Route path="/tires/size-comparison" element={<TireSizeComparisonPage />} />
            
            {/* Blog pages */}
            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/blog/engine-torque-all-you-need-to-know" element={<EngineTorqueAllYouNeedToKnowPage />} />
            <Route path="/blog/torque-vs-horsepower-the-differences" element={<TorqueVsHorsepowerTheDifferencesPage />} />
            <Route path="/blog/what-gear-consumes-less-fuel" element={<WhatGearConsumesLessFuelPage />} />
            <Route path="/blog/carburetor-vs-fuel-injection" element={<CarburetorvsFuelInjectionPage />} />
            <Route path="/blog/does-ac-increase-fuel-consumption" element={<DoesACIncreaseFuelConsumptionPage />} />
            <Route path="/blog/how-to-read-tire-size" element={<HowToReadTireSizePage />} />
            <Route path="/blog/how-to-reduce-fuel-consumption" element={<HowToReduceFuelConsumptionPage />} />
            <Route path="/blog/understanding-carburetor-all-you-should-know" element={<UnderstandingCarburetorAllYouShouldKnowPage />} />
            <Route path="/blog/why-does-my-speedometer-read-faster" element={<WhyDoesMySpeedometerReadFasterPage />} />
            
            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-600">
                © 2024 CalcNG. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm">
                <a href="/blog" className="text-gray-600 hover:text-blue-600">Blog</a>
                <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
                <a href="/terms-of-service" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a>
              </div>
            </div>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </Router>
  );
}
