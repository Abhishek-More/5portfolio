import { useEffect, useState } from "react";

interface SpotifyCurrentlyPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  duration: number;
  timestamp: number;
}

export const useSpotify = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] =
    useState<SpotifyCurrentlyPlaying | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch(
          "https://3portfolio-gray.vercel.app/api/spotify",
        );

        const data: SpotifyCurrentlyPlaying | null = await response.json();

        if (data?.isPlaying) {
          setIsPlaying(true);
          setCurrentTrack(data);
        } else {
          setIsPlaying(false);
          setCurrentTrack(null);
        }
      } catch (error) {
        console.log("Error fetching Spotify data:", error);
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

