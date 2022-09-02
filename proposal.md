# One-Stop One-Shot

## Introduction

Tabletop Role Playing Games (TTRPG) have been growing in popularity in recent years. Dungeons and Dragons 5th Edition is currently one of the most popular TTRPGs, and there are many tools avaiable for Dungeon Masters/Game Masters (DMs/GMs) to create a memorable player experience. However, these tools are scattered about the internet. Fortunately, some industrious TTRPG enthusiasts have gathered many of these tools into single places such as DMToolkit, Donjon, or 5etools. Unfortunately, most of these aggregators only link to each tool, making them mostly just repositories, at least to those unfamiliar with Virtual Table Tops (VTT). Advanced VTT users can integrate unlimited functionality into their campaign, but the average DM/GM has to make do with whatever tools they're familiar with and then reformat them for use within a VTT. 

## Project Overview

One-Stop One-Shot intends to increase accessibility by integrating many of these tools into a single interface. Users will be able to quickly create a dungeon, populate it with monsters and a villain/boss, and generate background for the session by answering questions such as who is the villain, what is their goal, who sent the party to this dungeon, etc. This project is only intended for single-session play, but stretch goals include more elaborate tools and a full campaign builder.

## Functionality

#### Minimum Viable Product
- Create, login, and view user profile
- Create a portfolio for a single TTRPG session
    - Generate battlemaps
    - Generate combat encounters
    - Generate villain, patrons, and mission objectives
- Ability to save portfolios

#### Stretch goals:
- Expand portfolio
    - Generate loot/valuables
    - Generate traps/environmental hazards
    - Generate other such things not here mentioned
    - verbose descriptions for rooms, traps, loot etc
- I don't know, a blog maybe?
    - Sharing saved portfolios
    - Rating system
    - Message board (LFG, advice)

#### Superstretch goals:
- Create collaborative workspace for session building
- Allow users to export directly to VTT
- Dynamic battlemaps
- Town/city generator
- Full campaign builder
- Build more apps
- non-combat oriented apps

## Libraries
- Django
- Vue
- tbd

## Data model

#### User
- id
- username
- created_at
- updated_at
- profile picture
- bio
- public/private 
- portfolios

#### Portfolios 
- Map
- Encounters
- Setting
- public/private
- tbd: rating?

#### Battlemap
- title
- image
- description

#### Encounter
- Party level
- Number of party members
- Difficulty
- Enemies
- Enemy type?

#### Setting
- Villain
    - Goals
    - Background
    - Monster type
- Patron
    - Mission brief
    - Reward
- Background
    - General setting
    - Political landscape
    - Time of year maybe? 

## Schedule

#### Week 1 - Research tools to use and contact creators
- contact creators of various tools
- see what kind of data is used for various tools
- see if that data can be easily exported from the tools
- create models
  - user
  - portfolio
  - favorites?
- integrate tools OR link to tools and receive data

#### Week 2 - Frontend
- create profile
- login
- logout
- single portfolio view
- multiple portfolios

#### Week 3 - Styling and Presentation
- create theme and styling
- walk through user experience
- finish presentation

#### Week 4 - Finishing touches
- work on bugs and last minute fixes
- finishing touches for styling

#### Week 5+ (Post-presentation) Stretch goals, Superstretch goals
- shared space landing page
- rating system
- integrate town/city generator
- light and dark themes
- campaign builder
- production? 
- make public for open contribution? 
- non-combat oreinted apps
  - social builder
  - dialogue starters
  - roleplay advice
  - villain one-liners
