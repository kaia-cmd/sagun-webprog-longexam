import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-4xl border-2 border-zinc-900 bg-zinc-100 p-6 sm:p-8 lg:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Page Not Found
        </p>

        <div className="mt-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight text-zinc-900 sm:text-6xl">
              404
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900 sm:text-3xl">
              This page has left the campus map.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              The link may be outdated, or the page may have been moved. Use one of the shortcuts
              below to continue browsing BulldogEx Shop.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back To Home
              </Button>
              <Button to="/products">Browse Products</Button>
              <Button to="/about">About BulldogEx</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
