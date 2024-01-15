import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const seachText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: seachText,
    category: category,
    page: page,
    limit: 6,
  });
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Discover, Engage, Enjoy: Your Event Hub</h1>
            <p className="p-regular-20 md:p-regular-24 ">
              Discover a tapestry of curated events, each crafted for memorable
              experiences. Join a community where passions thrive and
              connections flourish.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Events</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/heroImage-transformed.png"
            alt="Event Hub Illustration"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[70vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="my-8 wrapper flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Journey Through Events</h2>
        <div className="flex w-full flex-col md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={1} // page
          totalPages={2} // events?.totalPages
        />
      </section>
    </>
  );
}
