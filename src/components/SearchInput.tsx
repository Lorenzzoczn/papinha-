import { Search, X } from 'lucide-react';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchInput = ({ value, onChange, placeholder = 'Buscar...' }: SearchInputProps) => {
  return (
    <div className="search-input">
      <Search size={18} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label="Limpar busca">
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;

