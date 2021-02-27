v0.3.0-alpha

- Created Skills, Brief and Resume components already displaying the required info. The full list of components is:

  Location: src/components/body

  - Overview
  - PersonalBrief
  - Resume
  - Skills

- The new common components created to fill the previous mentioned ones are:

  Location: src/components/common

  - Badges (new badge added)
  - Buttons

- Finally, the aboutMe module holding the data feeding the overview section was created. It can be found under src/info

v0.2.0-alpha

- Created education and job components, already displaying the required info. The full list of components is:

  Location: src/components/body

  - Education And Job
  - Education
  - Job

- Aditionally, the components holding the basic structure of the website can be found in the same location (src/components/body)

  - Header
  - Content
  - Footer

- Created 3 modules with objects holding raw data to feed the skills, education and job sections:

  Location: src/info

  - education
  - job
  - skills

- Created the following common components:

  Location: src/components/common

  - Field Badge
  - Info Card
  - Badge Divider
  - Box Divider
  - Page Heading
  - Section Heading
  - Text Box
  - Bullet Text Box

- Due to an error, the code used in the education and job sections, was written into Overview modules generated in "src/components/body". This will be fixed in the next commit.

v0.1.0-alpha

- React app created.
