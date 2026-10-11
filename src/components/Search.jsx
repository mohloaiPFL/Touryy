export default function SearchFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}) {
  return (
    <section className="destination-search" style={styles.container}>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search destinations..."
        aria-label="Search destinations"
        style={styles.input}
      />

      <select
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter by category"
        style={styles.select}
      >
        <option value="All">All Categories</option>

        {categories
          .filter((category) => category !== "All")
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    margin: "25px 0"
  },
  input: {
    flex: "1 1 240px",
    minWidth: 0,
    padding: "14px",
    border: "1px solid #D6DDD8",
    borderRadius: "6px",
    fontSize: "16px"
  },
  select: {
    flex: "1 1 180px",
    padding: "14px",
    border: "1px solid #D6DDD8",
    borderRadius: "6px",
    background: "white",
    fontSize: "16px"
  }
};
