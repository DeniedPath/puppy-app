import { useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SettingsPanel() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('SettingsPanel must be used within a SettingsProvider');
  }

  const { settings, updateSetting } = context;

  useEffect(() => {
    // Apply dark mode class to body when theme changes
    document.body.classList.toggle('bootstrap-dark', settings.theme === 'dark');
  }, [settings.theme]);

  return (
    <div className="settings-container">
      <h2 className="settings-title">⚙️ Application Settings</h2>
      <div className="theme-selection">
        <label className="theme-label">Select Theme:</label>
        <select className="theme-dropdown" value={settings.theme} onChange={(e) => updateSetting('theme', e.target.value)}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>
    </div>
  );
} 