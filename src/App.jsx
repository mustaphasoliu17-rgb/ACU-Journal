import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Archive from "./components/Archive";
import SubmitManuscript from "./components/SubmitManuscript";
import ReviewerGuide from "./components/ReviewerGuide";
import CopyWright from "./components/CopyWright";
import Openaccess from "./components/Openaccess";
import Editorial from "./components/Editorial";
import Digitalarchiving from "./components/Digitalarchiving";
import Crossmark from "./components/Crossmark";
import Navbar from "./components/Navbar";
import SubmitNewManuscript from "./components/SubmitNewManuscript";
import SubmitRevisedManuscript from "./components/SubmitRevisedManuscript";
import Footer from "./components/Footer";
import AuthorGuide from "./components/AuthorGuide";
import EditorInChief from "./components/EditorInChief";
import PublicationEthics from "./components/PublicationEthics";
import EditorialBoard from "./components/EditorialBoard";
import PeerReview from "./components/PeerReview";
import Journal from "./pages/Journal";
import PublicationFee from "./components/PublicationFee";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* About Parent Route */}
            <Route path="/about-us" element={<AboutUs />}>
              <Route path="editor-in-chief" element={<EditorInChief />} />
              <Route path="editorial-board" element={<EditorialBoard />} />
              <Route path="peer-review" element={<PeerReview />} />
              <Route
                path="publication-ethics"
                element={<PublicationEthics />}
              />
            </Route>
            {/* ---- JOURNAL NESTED ROUTES ---- */}
            <Route path="/journal" element={<Journal />}>
              <Route path="archive" element={<Archive />} />
              <Route path="submit-manuscript" element={<SubmitManuscript />} />
              <Route path="reviewers-guide" element={<ReviewerGuide />} />
            </Route>

            <Route path="peer-review" element={<PeerReview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/editorial-board" element={<EditorialBoard />} />
            <Route path="/submit-manuscript" element={<SubmitManuscript />} />
            <Route path="/submit-new" element={<SubmitNewManuscript />} />
            <Route
              path="/submit-revised-manuscript"
              element={<SubmitRevisedManuscript />}
            />
            <Route path="/authors" element={<AuthorGuide />} />
            <Route path="/publication-ethics" element={<PublicationEthics />} />
            <Route path="/reviewers-guide" element={<ReviewerGuide />} />
            <Route path="/copyright" element={<CopyWright />} />
            <Route path="/open-access" element={<Openaccess />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/digital-archiving" element={<Digitalarchiving />} />
            <Route path="/crossmark" element={<Crossmark />} />
            <Route path="/puplication-fee" element={<PublicationFee />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
