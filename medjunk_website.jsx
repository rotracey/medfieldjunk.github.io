import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MedfieldJunk() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-800">Medfield Junk</h1>
        <div className="space-x-6">
          <button onClick={() => setPage("home")} className="hover:text-green-600">Home</button>
          <button onClick={() => setPage("services")} className="hover:text-green-600">Services</button>
          <button onClick={() => setPage("founders")} className="hover:text-green-600">Meet the Founders</button>
          <button onClick={() => setPage("contact")} className="hover:text-green-600">Contact</button>
        </div>
      </nav>

      {/* Pages */}
      <main className="p-10 max-w-5xl mx-auto">
        {page === "home" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-green-900 mb-4">Junk Removal in Greater Boston</h2>
            <p className="text-lg mb-6">
              We provide fast, reliable, and eco-friendly junk removal services. Whether residential or commercial, we’ve got you covered.
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Book Now</Button>
          </motion.div>
        )}

        {page === "services" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-green-900 mb-6">What We Remove</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Furniture</li>
              <li>Mattresses & Box Springs</li>
              <li>Hot Tubs</li>
              <li>Appliances</li>
              <li>Clothes, Furniture & Other Donatables (we repurpose!)</li>
              <li>And much more!</li>
            </ul>
          </motion.div>
        )}

        {page === "founders" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-green-900 mb-6">Meet the Founders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Declan Bligh</h3>
                  <p className="mt-2 text-gray-700">Co-Founder of Medfield Junk. Declan is passionate about helping the community by providing efficient junk removal while focusing on sustainability and repurposing materials.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Rowan Tracey</h3>
                  <p className="mt-2 text-gray-700">Co-Founder of Medfield Junk. Rowan ensures each project is handled with care and works hard to make the junk removal process as stress-free as possible for clients.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {page === "contact" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-green-900 mb-6">Contact Us</h2>
            <p className="text-lg mb-2">Phone: <a href="tel:7746880012" className="text-green-700 font-semibold">774-688-0012</a></p>
            <p className="text-lg mb-6">Email: <a href="mailto:medfieldjunk@gmail.com" className="text-green-700 font-semibold">medfieldjunk@gmail.com</a></p>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Get a Free Quote</Button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-green-900 text-white mt-10">
        <p>© {new Date().getFullYear()} Medfield Junk. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
