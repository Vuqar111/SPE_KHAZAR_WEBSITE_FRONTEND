import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRoute from "./components/Routes/AdminRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Footer from "./components/FeatureComponents/Footer";
import HomeScreen from "./screens/HomeScreen";
import Dashboard from './screens/Dashboard/Dashboard';
import ProductListScreen from "./screens/ProductPages/ProductListScreen";
import ProductScreen from "./screens/ProductPages/ProductDetailsScreen";
import ProfileScreen from "./screens/ProfilePages/ProfileScreen";
import RegisterScreen from "./screens/AuthPages/RegisterScreen";
import SigninScreen from "./screens/AuthPages/SigninScreen";
import ProductsSection from "./screens/ProductPages/ProductScreen";
import ProductEditScreen from "./screens/ProductPages/ProductEditScreen";
import BlogScreen from "./screens/BlogsPages/BlogScreen";
import BlogDetailsScreen from "./screens/BlogsPages/BlogDetailsScreen";
import BlogEditScreen from "./screens/BlogsPages/BlogEditScreen";
import BlogListScreen from "./screens/BlogsPages/BlogListScreen";
import BooksSection from "./screens/BookPages/BookScreen";
import BookEditScreen from "./screens/BookPages/BookEditScreen";
import BookListScreen from "./screens/BookPages/BookListScreen";
import RecordsSection from "./screens/RecordPages/RecordScreen";
import RecordEditScreen from "./screens/RecordPages/RecordEditScreen";
import RecordListScreen from "./screens/RecordPages/RecordListScreen";
import GalleriesSection from "./screens/GalleryPages/GallerieScreen";
import GalleryEditScreen from "./screens/GalleryPages/GalleryEditScreen";
import GalleryListScreen from "./screens/GalleryPages/GalleryListScreen";
import CertificateEditScreen from "./screens/CertificatePages/CertificateEdit";
import CertificateListScreen from "./screens/CertificatePages/CertificateList";
import UserListScreen from "./screens/ProfilePages/UserListScreen";
import UserEditScreen from "./screens/ProfilePages/UserEditScreen";
import SubHeader from "./components/FeatureComponents/SubHeader";
import About from "./components/About";
import { Contact } from "./components/Contact";
import FAQ from "./components/FAQ";
import PageNotFound from "./components/HelperComponents/PageNotFound";
import Teams from "./components/BoxComponents/Teams.js";
import { Navbar } from "./components/FeatureComponents/Navbar";
import CertificateCheck from "./screens/CertificatePages/CertificateCheck";
import Hackathon from "./components/Computation/Hackathon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SubHeader />
      <Switch>
        <Route path="/events" component={ProductsSection} exact></Route>
        <Route path="/event/:id" component={ProductScreen} exact></Route>
        <Route
          path="/event/:id/edit"
          component={ProductEditScreen}
          exact
        ></Route>

        {/* Blog */}

        <Route path="/blogs" component={BlogScreen} exact></Route>
        <Route path="/blog/:id" component={BlogDetailsScreen} exact></Route>
        <Route path="/blog/:id/edit" component={BlogEditScreen} exact></Route>

        {/* Record Routers */}
        <Route path="/records" component={RecordsSection} exact></Route>
        <Route
          path="/record/:id/edit"
          component={RecordEditScreen}
          exact
        ></Route>

        {/* Books */}

        <Route path="/books" component={BooksSection} exact></Route>
        <Route path="/book/:id/edit" component={BookEditScreen} exact></Route>

        <Route
          path="/certificate/:id/edit"
          component={CertificateEditScreen}
          exact
        ></Route>
        <Route
          path="/certificatecheck"
          component={CertificateCheck}
          exact
        ></Route>

        {/* Gallery */}
        <Route path="/galleries" component={GalleriesSection} exact></Route>
        <Route
          path="/gallery/:id/edit"
          component={GalleryEditScreen}
          exact
        ></Route>

        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/faq" component={FAQ} exact></Route>
        <Route path="/teams" component={Teams} exact></Route>
        <Route path="/hackathon" component={Hackathon} exact></Route>

        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <AdminRoute
          path="/dashboard"
          component={Dashboard}
        ></AdminRoute> 
        <AdminRoute
          path="/eventlist"
          component={ProductListScreen}
        ></AdminRoute>
        <AdminRoute path="/bloglist" component={BlogListScreen}></AdminRoute>
        <AdminRoute
          path="/gallerylist"
          component={GalleryListScreen}
        ></AdminRoute>
        <AdminRoute path="/booklist" component={BookListScreen}></AdminRoute>
        <AdminRoute
          path="/recordlist"
          component={RecordListScreen}
        ></AdminRoute>
        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
          path="/user/:id/edit"
          component={UserEditScreen}
        ></AdminRoute>
        {/* Certificate */}
        <AdminRoute
          path="/certificatelist"
          component={CertificateListScreen}
          exact
        ></AdminRoute>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
