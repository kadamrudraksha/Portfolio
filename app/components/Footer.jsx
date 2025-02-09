export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Rudraksha Kadam.</p>
      </div>
    </footer>
  );
}
