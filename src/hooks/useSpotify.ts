import { useEffect, useState } from "react";

interface SpotifyCurrentlyPlaying {
  is_playing: boolean;
  item?: {
    name: string;
    artists: Array<{ name: string }>;
  };
}

export const useSpotify = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

        if (!token) return;

        const response = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 204) {
          setIsPlaying(false);
          setCurrentTrack(null);
          return;
        }

        if (response.ok) {
          const data: SpotifyCurrentlyPlaying = await response.json();
          setIsPlaying(data.is_playing);
          setCurrentTrack(
            data.item
              ? `${data.item.name} - ${data.item.artists.map((a) => a.name).join(", ")}`
              : null,
          );
        } else {
          setIsPlaying(false);
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        setIsPlaying(false);
        setCurrentTrack(null);
      }
    };

    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 5000);

    return () => clearInterval(interval);
  }, []);

  return { isPlaying, currentTrack };
};

