"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <html lang="en">
              <body className={inter.className}>{children}</body>
            </html>
          )}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
