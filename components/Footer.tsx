export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container-default py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2">
          <p>
            © {new Date().getFullYear()} RVHB • Affiliated with HelmsBriscoe
          </p>
          <p>
            This site uses minimal cookies for analytics and performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
