import {
    Map,
    MapArc,
    MapMarker,
    MarkerContent,
    MarkerLabel,
} from "@/components/ui/map";

const hub = { name: "Kolkata, India", lng: 88.3639, lat: 22.5726 };

const destinations = [
    { name: "New York", lng: -74.006, lat: 40.7128 },
    { name: "San Francisco", lng: -122.4194, lat: 37.7749 },
    { name: "Seattle", lng: -122.3321, lat: 47.6062 },
    { name: "Toronto", lng: -79.3832, lat: 43.6532 },
    { name: "London", lng: -0.1276, lat: 51.5074 },
    { name: "Amsterdam", lng: 4.9041, lat: 52.3676 },
    { name: "Berlin", lng: 13.405, lat: 52.52 },
    { name: "Paris", lng: 2.3522, lat: 48.8566 },
    { name: "Stockholm", lng: 18.0686, lat: 59.3293 },
    { name: "Zurich", lng: 8.5417, lat: 47.3769 },
    { name: "Tel Aviv", lng: 34.7818, lat: 32.0853 },
    { name: "Riyadh", lng: 46.7219, lat: 24.6877 },
    { name: "Dubai", lng: 55.2708, lat: 25.2048 },
    { name: "Bengaluru", lng: 77.5946, lat: 12.9716 },
    { name: "Singapore", lng: 103.8198, lat: 1.3521 },
    { name: "Kuala Lumpur", lng: 101.6869, lat: 3.139 },
    { name: "Tokyo", lng: 139.6917, lat: 35.6895 },
    { name: "Seoul", lng: 126.978, lat: 37.5665 },
    { name: "Sydney", lng: 151.2093, lat: -33.8688 },
    { name: "Melbourne", lng: 144.9631, lat: -37.8136 },
];


const arcs = destinations.map((dest) => ({
    id: dest.name,
    from: [hub.lng, hub.lat] as [number, number],
    to: [dest.lng, dest.lat] as [number, number],
}));

export function MapDestination() {
    return (
        <div className="sm:h-[500px] h-[400px] w-full">
            <Map center={[55, hub.lat]} zoom={1.75} projection={{ type: "globe" }}>
                <MapArc
                    data={arcs}
                    paint={{
                        "line-color": "#3b82f6",
                        "line-dasharray": [2, 2],
                    }}
                    interactive={false}
                />

                <MapMarker longitude={hub.lng} latitude={hub.lat}>
                    <MarkerContent>
                        <div className="size-3 rounded-full border-2 border-white bg-blue-500" />
                        <MarkerLabel
                            position="top"
                            className="bg-blue/80 rounded-sm px-1.5 py-0.5 text-[11px] font-semibold backdrop-blur"
                        >
                            {hub.name}
                        </MarkerLabel>
                    </MarkerContent>
                </MapMarker>

                {destinations.map((dest) => (
                    <MapMarker key={dest.name} longitude={dest.lng} latitude={dest.lat}>
                        <MarkerContent>
                            <div className="size-3 rounded-full border-2 border-white bg-red-500" />
                            <MarkerLabel position="top">{dest.name}</MarkerLabel>
                        </MarkerContent>
                    </MapMarker>
                ))}
            </Map>
        </div >
    );
}