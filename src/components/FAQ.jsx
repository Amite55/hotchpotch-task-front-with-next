
import React from 'react';

const FAQ = () => {
    return (
        <section className="bg-gradient-to-b from-[#2B59FF] via-gray-900 to-black text-white py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Question 1 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">What is Mixland AI Writer?</h3>
        <p className="text-gray-300">Mixland AI Writer is an advanced content generation tool that helps you create high-quality content for blogs, social media, websites, and more using artificial intelligence.</p>
      </div>

      {/* Question 2 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Do I need any technical skills to use this tool?</h3>
        <p className="text-gray-300">No, Mixland AI Writer is designed for everyone. Whether you're a marketer, writer, or entrepreneur, you can create content without needing any technical expertise.</p>
      </div>

      {/* Question 3 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Is there a free trial available?</h3>
        <p className="text-gray-300">Yes, we offer a 14-day free trial with access to all features, so you can experience the full potential of Mixland AI Writer before committing.</p>
      </div>

      {/* Question 4 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">What types of content can I create with this tool?</h3>
        <p className="text-gray-300">You can create content for blogs, Facebook ads, email campaigns, product descriptions, and more. Over 54 exciting tools are available to suit your needs.</p>
      </div>

      {/* Question 5 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Can I cancel my subscription anytime?</h3>
        <p className="text-gray-300">Yes, you can cancel your subscription anytime directly from your account settings without any hassle.</p>
      </div>

      {/* Question 6 */}
      <div className="bg-purple-700/30 p-8 rounded-2xl shadow-md border border-purple-600 transition transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Is my content secure?</h3>
        <p className="text-gray-300">Absolutely. We use industry-standard encryption to ensure your data and content are safe and secure.</p>
      </div>

    </div>
  </div>
</section>




    );
};

export default FAQ;