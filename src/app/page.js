import Banner from "@/components/Banner";
import ClientSection from "@/components/ClientSection";
import CustomerReviews from "@/components/CustomerReviews";
import FAQ from "@/components/FAQ";
import FastContent from "@/components/FastContent";
import Featured from "@/components/Featured";
import Free from "@/components/Free";
import Packege from "@/components/Packege";
import SecondContent from "@/components/SecondContent";
import WritingTools from "@/components/WritingTools";


export default function Home() {
  return (
    <>
      <Banner />
      <ClientSection />
      <FastContent />
      <SecondContent />
      <WritingTools />
      <Featured />
      <CustomerReviews />
      <FAQ />
      <Packege />
      <Free />
    </>
  );
}
