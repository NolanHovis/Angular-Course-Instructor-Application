# Class 4 - Course Basics && Debugging

---

## Steps

### Planning the Application

**What are the features?**

![Site Features](./SiteFeatures.png)

### Starting a New Project

```zsh
    ng new angulearn --no-strict

    npm install --save bootstrap@3
```

1. Import "node_modules/bootstrap/dist/css/bootstrap.min.css" in angular.json under "styles" tag.
2. Clear App component HTML.
3. Test For Bootstrap by adding a container div with a row and column with text inside.

```zsh
    ng serve
```

### Add Starting Components & File Structure

```zsh
    ng g c navigation --skip-tests=true

    ng g c bookshelf --skip-tests=true

    ng g c library --skip-tests=true
```

- Add shared folder
- Add `<app-navigation></app-navigation>` to App Component above the row.

```zsh
    ng g c bookshelf/book-list --skip-tests=true

    ng g c bookshelf/book-details --skip-tests=true

    ng g c library/book-search --skip-tests=true
```

- Make sure they are all uploaded in app.module.ts
