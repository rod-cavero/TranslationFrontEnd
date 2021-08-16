#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["TranslationFrontEnd.csproj", "."]
RUN dotnet restore "./TranslationFrontEnd.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "TranslationFrontEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TranslationFrontEnd.csproj" -c Release -o /app/publish


# Compilar Angular
FROM node:14-slim as nodebuilder
 # Establecer directorio de trabajo angular
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY ClientApp/package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.3 --unsafe
# add app
COPY ClientApp/. /usr/src/app
RUN npm run build

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
RUN mkdir -p /app/ClientApp/dist
COPY --from=nodebuilder /usr/src/app/dist/. /app/ClientApp/dist/
ENTRYPOINT ["dotnet", "TranslationFrontEnd.dll"]