export default function InvitationPage() {
  const event = {
    title: "MAYUMI DAN SHAHRONI HIHI",
    subtitle: "You're invited!",
    date: "Saturday, 18 October 2025",
    time: "4:00 PM – 8:00 PM",
    timezone: "GMT+7",
    location: "The Glasshouse, Jakarta",
    address: "Jl. Contoh No. 123, Jakarta",
    hosts: "Hosted by the Parkers",
    dressCode: "Garden chic",
    rsvpEmail: "rsvp@example.com",
    mapQuery: "The Glasshouse Jakarta",
  };

  const dtStart = "20251018T090000Z";
  const dtEnd = "20251018T130000Z";
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Next Invite//EN\nBEGIN:VEVENT\nUID:${Math.random().toString(36).slice(2)}@next-invite\nDTSTAMP:${dtStart}\nDTSTART:${dtStart}\nDTEND:${dtEnd}\nSUMMARY:${event.title}\nLOCATION:${event.location} - ${event.address}\nDESCRIPTION:${event.subtitle}\\n${event.hosts}\\nDress code: ${event.dressCode}\nEND:VEVENT\nEND:VCALENDAR`;

  const calendarHref = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
  const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`;
  const rsvpHref = `mailto:${event.rsvpEmail}?subject=${encodeURIComponent(`RSVP for ${event.title}`)}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="relative rounded-3xl shadow-xl overflow-hidden bg-white">
          <div className="h-40 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-400" />

          <div className="p-8 -mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
              <p className="text-rose-500 uppercase tracking-widest text-sm text-center mb-2">{event.subtitle}</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight">{event.title}</h1>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Info label="Date" value={event.date} />
                <Info label="Time" value={`${event.time} (${event.timezone})`} />
                <Info label="Location" value={event.location} />
                <Info label="Address" value={event.address} />
              </div>

              <div className="mt-6 text-center text-gray-600">
                <p>{event.hosts}</p>
                <p>Dress code: {event.dressCode}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-center">
                <a href={calendarHref} download={`${event.title.replace(/\s+/g, "-")}.ics`} className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition">Add to Calendar</a>
                <a href={googleMapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white hover:opacity-90 shadow-sm transition">View Map</a>
                <a href={rsvpHref} className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-rose-500 text-white hover:bg-rose-600 shadow-sm transition">RSVP via Email</a>
              </div>

              <p className="mt-8 text-center text-xs text-gray-500">Kindly RSVP by October 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-widest text-gray-500">{label}</span>
      <span className="text-lg font-semibold">{value}</span>
    </div>
  );
}
