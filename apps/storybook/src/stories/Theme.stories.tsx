import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Button, useTheme } from "@repo/ui";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className="space-y-4 p-8 bg-surface rounded-xl border border-outline-variant/10">
      <h3 className="text-lg font-bold">Theme Lab</h3>
      <div className="flex gap-4">
        <button 
          onClick={() => setTheme({ primary: "#000000", surface: "#f9f9fa" })}
          className="px-4 py-2 bg-black text-white text-xs rounded"
        >
          Titanium (Default)
        </button>
        <button 
          onClick={() => setTheme({ primary: "#ba1a1a", surface: "#fff5f5" })}
          className="px-4 py-2 bg-red-600 text-white text-xs rounded"
        >
          Crimson
        </button>
        <button 
          onClick={() => setTheme({ primary: "#006400", surface: "#f0fff0" })}
          className="px-4 py-2 bg-green-800 text-white text-xs rounded"
        >
          Forest
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <label className="text-xs font-bold">Spacing Scale:</label>
        <input 
          type="range" min="0.5" max="2" step="0.1" 
          onChange={(e) => setTheme({ spacingUnit: `${e.target.value}rem` })}
        />
      </div>
      <div className="pt-8 border-t border-outline-variant/10">
        <Button>Themed Button</Button>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Theme/Switcher",
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
