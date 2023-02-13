interface Marker {
    name: string;
    location: [number, number];
  }
  
  interface GPSLocation {
    markers: Marker[];
  }
  
  class GPSLocationCalculator {
    private gpsLocation: GPSLocation;
  
    constructor(gpsLocation: GPSLocation) {
      this.gpsLocation = gpsLocation;
    }
  
    public calculateDistance(): number {
      const start = this.gpsLocation.markers[0].location;
      const destination = this.gpsLocation.markers[1].location;
      const lat1 = start[0];
      const lat2 = destination[0];
      const lon1 = start[1];
      const lon2 = destination[1];
  
      const R = 6371; // Earth's radius in kilometers
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
  
      return d;
    }
  }
  
  const gpsLocation: GPSLocation = {
    markers: [
      {
        name: "start",
        location: [35.1212, 56.1225],
      },
      {
        name: "destination",
        location: [35.2235, 52.4125]
      }
    ]
  };
  
  const gpsLocationCalculator = new GPSLocationCalculator(gpsLocation);
  const distance = gpsLocationCalculator.calculateDistance();
  console.log(distance);