import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminRoute from "./components/Routes/AdminRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Footer from "./components/FeatureComponents/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductPages/ProductListScreen";
import ProductScreen from "./screens/ProductPages/ProductScreen";
import ProfileScreen from "./screens/ProfilePages/ProfileScreen";
import RegisterScreen from "./screens/AuthPages/RegisterScreen";
import SigninScreen from "./screens/AuthPages/SigninScreen";
import ProductsSection from "./screens/ProductPages/ProductsSection";
import ProductEditScreen from "./screens/ProductPages/ProductEditScreen";
import BlogsSection from "./screens/BlogsPages/BlogsSection";
import BlogScreen from "./screens/BlogsPages/BlogScreen";
import BlogEditScreen from "./screens/BlogsPages/BlogEditScreen";
import BlogListScreen from "./screens/BlogsPages/BlogListScreen";
import BooksSection from "./screens/BookPages/BooksSection";
import BookDetailsScreen from "./screens/BookPages/BookDetailsScreen";
import BookEditScreen from "./screens/BookPages/BookEditScreen";
import BookListScreen from "./screens/BookPages/BookListScreen";
import RecordsSection from "./screens/RecordPages/RecordsSection";
import RecordEditScreen from "./screens/RecordPages/RecordEditScreen";
import RecordListScreen from "./screens/RecordPages/RecordListScreen";
import GalleriesSection from "./screens/GalleryPages/GalleriesSection";
import GalleryEditScreen from "./screens/GalleryPages/GalleryEditScreen";
import GalleryListScreen from "./screens/GalleryPages/GalleryListScreen";
import UserListScreen from "./screens/ProfilePages/UserListScreen";
import UserEditScreen from "./screens/ProfilePages/UserEditScreen";
import SubHeader from "./components/FeatureComponents/SubHeader";
import About from "./components/About";
import Error from "./components/HelperComponents/Error";
import FAQ from './components/FAQ';
import Teams from "./components/BoxComponents/Teams.js";
import {Navbar}  from "./components/FeatureComponents/Navbar";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <SubHeader />
        <main>

          <Route path="/events" component={ProductsSection} exact></Route>
          <Route path="/event/:id" component={ProductScreen} exact></Route>
          <Route
            path="/event/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

          {/* Blog */}

          <Route path="/blogs" component={BlogsSection} exact></Route>
          <Route path="/blog/:id" component={BlogScreen} exact></Route>
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
          <Route path="/book/:id" component={BookDetailsScreen} exact></Route>
          <Route path="/book/:id/edit" component={BookEditScreen} exact></Route>

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
          <Route path="/faq" component={FAQ} exact></Route>
          <Route path="/teams" component={Teams} exact></Route>

          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
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
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path='*' element={<Error />} />
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
