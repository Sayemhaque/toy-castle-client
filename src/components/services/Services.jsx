/* eslint-disable react/no-unescaped-entities */

const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 px-5 md:max-w-6xl mx-auto">
      {/* Eco-Friendly Enchantment */}
      <section className="bg-purple-200 py-6 md:py-10 px-4">
        <h2 className="text-3xl font-semibold mb-2">Eco-Friendly Enchantment</h2>
        <p className="text-gray-600 mb-4">
          At Toy Castle, we're committed to both play and the planet. Our Eco-Friendly Enchantment section features a selection of toys made from sustainable materials, encouraging eco-conscious play while preserving the enchantment of childhood.
        </p>
        {/* Add eco-friendly toy listings here */}
      </section>

      {/* Creative Craftsmanship */}
      <section className="bg-purple-200 py-6 md:py-10 px-4">
        <h2 className="text-3xl font-semibold mb-2">Creative Craftsmanship</h2>
        <p className="text-gray-600 mb-4">
          Unleash your childs inner artist with our Creative Craftsmanship offerings. From DIY kits to art supplies, this section is dedicated to nurturing creativity and self-expression, allowing your child to craft their own masterpieces.
        </p>
        {/* Add creative craftsmanship products here */}
      </section>

      {/* Interactive Playtime */}
      <section className="bg-purple-200 py-6 md:py-10 px-4">
        <h2 className="text-3xl font-semibold mb-2">Interactive Playtime</h2>
        <p className="text-gray-600 mb-4">
          Experience the magic of interactive toys that engage and educate. Our Interactive Playtime selection showcases toys that encourage learning through play, from educational puzzles that challenge young minds to science kits that transform learning into an adventure.
        </p>
        {/* Add interactive playtime products here */}
      </section>

      {/* Customer Enchantments */}
      <section className="bg-purple-200 py-6 md:py-10 px-4">
        <h2 className="text-3xl font-semibold mb-2">Customer Enchantments</h2>
        <p className="text-gray-600 mb-4">
          Read stories and testimonials from our customers who have embarked on their own journeys with Toy Castle. Explore how our toys have inspired imagination, fostered connections, and brought smiles to children's faces across the realm.
        </p>
        {/* Add customer stories and testimonials here */}
      </section>

      {/* Join the Toy Castle Quest */}
      <section className="bg-purple-200 py-6 md:py-10 px-4">
        <h2 className="text-3xl font-semibold mb-2">Join the Toy Castle Quest</h2>
        <p className="text-gray-600 mb-4">
          Become a part of the Toy Castle community by subscribing to our newsletter. Stay enchanted with updates on new arrivals, exclusive offers, and enchanting play ideas delivered straight to your inbox.
        </p>
        {/* Add newsletter subscription form here */}
      </section>
    </div>
    );
};

export default Services;