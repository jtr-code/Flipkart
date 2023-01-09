import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//      <--------------------------------------- styled section starts-------------------------------->

const SearchContainer = styled(Box)`
  display: flex;
  width: 531.9998px;
  height: 36px;
  color: #000000;
  background-color: #ffff;
  padding: 0 16px 0 16px;
  margin-left: 12px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
`;

const InputSearchBase = styled(InputBase)`
  padding: 0;
  width: 100%;
  font-size: 13.33px;
  font-family: Roboto, Arial, sans-serif;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  cursor: pointer;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
