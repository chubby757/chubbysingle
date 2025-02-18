import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import SigninScreen from './screens/SigninScreen';
import ProfileScreen from './screens/ProfileScreen';

import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';

import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import MobileSearchPage from './screens/MobileSearchPage';
import CreateProfile from './screens/CreateProfile';
import SelectGender from './screens/SelectGender';
import FemaleSignupScreen from './screens/FemaleSignupScreen';
import MaleSignupScreen from './screens/MaleSignupScreen';
import MyProfile from './screens/MyProfile';
import UploadProfile from './screens/UploadProfile';
import UploadBanner from './screens/UploadBanner';
import UploadImageFour from './screens/UploadImageFour';
import UploadImageone from './screens/UploadImageone';
import Uploadimagetwo from './screens/UploadImagetwo';
import UploadImageThree from './screens/UploadImageThree';
import BannerImg from './screens/BannerImg';
import Image from './screens/Image';
import Image1 from './screens/Image1';
import Image2 from './screens/Image2';
import Image3 from './screens/Image3';
import Image4 from './screens/Image4';
import UserProfile from './screens/UserProfile';
import PaymentPage from './screens/PaymentPage';


function App() {



 
  return (
    <BrowserRouter>

      <main>

        <Routes>
        <Route path="/userprofile/:slug" element={<UserProfile />} />
          <Route path="/user/:slug" element={<ProductScreen />} />
          <Route path="/myprofile/:slug" element={<MyProfile />} />
          <Route path="/search" element={<SearchScreen />} />
          
          <Route path="/upgrade" element={<PaymentPage />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/female/account" element={<FemaleSignupScreen />} />
          <Route path="/male/account" element={<MaleSignupScreen />} />
          <Route
            path="/forget-password"
            element={<ForgetPasswordScreen />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordScreen />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileScreen />
              </ProtectedRoute>
            }
          />

          <Route
            path="/banner/:slug"
            element={
              <ProtectedRoute>
                <BannerImg />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/:slug"
            element={
              <ProtectedRoute>
                <Image />
              </ProtectedRoute>
            }
          />

          <Route
            path="/image1/:slug"
            element={
              <ProtectedRoute>
                <Image1 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/image2/:slug"
            element={
              <ProtectedRoute>
                <Image2 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/image3/:slug"
            element={
              <ProtectedRoute>
                <Image3 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/image4/:slug"
            element={
              <ProtectedRoute>
                <Image4 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadimage"
            element={
              <ProtectedRoute>
                <UploadProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadimageone"
            element={
              <ProtectedRoute>
                <UploadImageone />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadimagetwo"
            element={
              <ProtectedRoute>
                <Uploadimagetwo />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadimagethree"
            element={
              <ProtectedRoute>
                <UploadImageThree />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadimagefour"
            element={
              <ProtectedRoute>
                <UploadImageFour />
              </ProtectedRoute>
            }
          />

          <Route
            path="/uploadibanner"
            element={
              <ProtectedRoute>
                <UploadBanner />
              </ProtectedRoute>
            }
          />

          <Route
            path="/createprofile"
            element={

              <CreateProfile />

            }
          />


          <Route path="/selectgender" element={<SelectGender />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
