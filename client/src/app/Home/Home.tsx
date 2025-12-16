import MainPhoenix from '@/components/MainPhoenix/PhoenixContent';
import LinkLessons from '@/components/LinkLessons/LinkLessonsCard';
import Lessons from '@/components/Lessons/Lesson';
import About from '@/components/About/about';
import AboutHSK from '@/components/AboutHSK/AboutHSK';
import Teachers from '@/components/teachers/teachers';
import FAQ from '@/components/FAQ/faq';
import Contact from '@/components/Contact/contact';
import GallerySlider from '@/components/Gallery/gallery';
import Review from '@/components/Review/Review';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import FloatingSocials from '@/components/FloatingSocials/FloatingSocials';


export default function Home() {
    return (
        <>
            <MainPhoenix/>
            <LinkLessons/>
            <Lessons/>
            <About/>
            <AboutHSK/>
            <Teachers/>
            <FAQ/>
            <Contact/>
            <GallerySlider/>
            <Review/>
            <Footer/>
            <Map/>
            <FloatingSocials/>
        </>
    );
}
