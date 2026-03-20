import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import OrderForm from "@/components/OrderForm";
import Tracking from "@/components/Tracking";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Menu />
    <SubscriptionPlans />
    <OrderForm />
    <Tracking />
    <MapSection />
    <Footer />
  </div>
);

export default Index;
