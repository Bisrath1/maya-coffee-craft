import React, { useState } from 'react';
import { Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LanguageCurrencyToggle = () => {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const currentCurrency = currencies.find(curr => curr.code === currency);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      {/* Language Toggle */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm border shadow-lg">
            <Globe className="h-4 w-4 mr-1" />
            <span className="mr-1">{currentLanguage?.flag}</span>
            <span className="hidden sm:inline">{currentLanguage?.name}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2" align="end">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PopoverContent>
      </Popover>

      {/* Currency Toggle */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm border shadow-lg">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{currentCurrency?.symbol}</span>
            <span className="hidden sm:inline ml-1">{currentCurrency?.code}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2" align="end">
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  <div className="flex items-center gap-2">
                    <span>{curr.symbol}</span>
                    <span>{curr.code} - {curr.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageCurrencyToggle;