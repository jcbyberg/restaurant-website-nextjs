"use client";

import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import DishesSection from "../components/DishesSection";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import ReviewSection from "../components/ReviewSection";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <CategorySection />
        <DishesSection />
        <AboutSection />
        
        <ReviewSection />
        <OrderSection />
      </main>
      <Footer />
    </>
  );
}
