import classNames from 'classnames';

const CATEGORIES = ['invention', 'typography', 'movement'];

const FilterBar = ({ activeCategories, setActiveCategories, searchQuery, setSearchQuery }) => {
  const toggleCategory = (category) => {
    if (activeCategories.includes(category)) {
      if (activeCategories.length > 1) {
        setActiveCategories(activeCategories.filter((c) => c !== category));
      }
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  return (
    <div className="filter-bar">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={classNames('filter-btn', cat)}
          aria-pressed={activeCategories.includes(cat)}
          onClick={() => toggleCategory(cat)}
        >
          {cat}
        </button>
      ))}
      <input
        type="search"
        className="search-input"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search timeline items"
      />
    </div>
  );
};

export default FilterBar;
