import Banner from "@/componants/Banner";
import DoctorSection from "@/componants/DoctorSection";
import HealthcareServices from "@/componants/HealthcareServices";
import PopularDoctor from "@/componants/PopularDoctor";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularDoctor></PopularDoctor>
      <HealthcareServices></HealthcareServices>
      <DoctorSection></DoctorSection>
    </div>
  );
}
