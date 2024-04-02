import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Slide,
  Switch,
  TextField,
} from "@mui/material";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppCard from "@crema/components/AppCard";
import { TagType } from "@crema/types/models/extrapages/Blog";

const TagList = [
  {
    id: 1,
    name: "Fashion",
  },
  {
    id: 2,
    name: "Hotel",
  },
  {
    id: 3,
    name: "Event",
  },
];

type Props = {
  selectedTags: TagType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TagType[]>>;
};
const BlogSidebar = ({ selectedTags, setSelectedTags }: Props) => {
  return (
    <Slide direction="left" in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={4}>
        <AppCard title="Blog Details">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Switch
              value="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Box component="p">Publish</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Switch
              value="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Box component="p">Comments</Box>
          </Box>

          <Autocomplete
            multiple
            id="tags-outlined"
            sx={{
              width: "100%",
              my: 2,
            }}
            options={TagList}
            autoHighlight
            getOptionLabel={(option) => option.name}
            value={selectedTags}
            onChange={(event, value) => setSelectedTags(value)}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ display: "flex", alignItems: "center" }}
                {...props}
              >
                <Box ml={4}>{option?.name}</Box>
              </Box>
            )}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                fullWidth
              />
            )}
          />

          <AppTextField
            name="metatitle"
            variant="outlined"
            sx={{
              width: "100%",
              my: 2,
            }}
            label="Meta Title"
          />
          <AppTextField
            multiline
            name="metadesc"
            variant="outlined"
            rows={4}
            sx={{
              width: "100%",
              my: 2,
            }}
            label="Meta Description"
          />
          <AppTextField
            name="keywords"
            variant="outlined"
            sx={{
              width: "100%",
              my: 2,
            }}
            label="Meta Keywords"
          />
        </AppCard>

        <Button
          sx={{
            display: "block",
            minWidth: 100,
            mt: 4,
            ml: "auto",
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Publish
        </Button>
      </Grid>
    </Slide>
  );
};

export default BlogSidebar;
