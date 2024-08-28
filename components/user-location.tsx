"use client";

import React, { useEffect, useState } from "react";

export default function UserLocation() {
    const [location, setLocation] = useState({ city: '', country: '' });

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                setLocation({
                    city: data.city || 'Unknown',
                    country: data.country_name || 'Unknown'
                });
            })
            .catch(error => {
                console.error("Error fetching location:", error);
                setLocation({ city: 'Unknown', country: 'Unknown' });
            });
    }, []);

    return (
        <div>
            <p className="text-gray-700 font-bold dark:text-gray-200 sm:text-lg">
                to: {location.city}, {location.country}
            </p>
            <p className="text-gray-700 dark:text-gray-200 sm:text-lg">from: Bengaluru, India</p>
        </div>
    );
}