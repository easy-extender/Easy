# Easy Toolset

A lightweight set of tools that makes easier to develop unity projects.

### Table of Contents

- [Easy Toolset](#easy-toolset)
    - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [e.[shortcut]](#eshortcut)
  - [AudioPlayer](#audioplayer)
      - [Play](#play)
      - [Stop](#stop)
      - [Volume](#volume)
      - [Mute](#mute)
      - [Output](#output)
      - [Toggle Mute](#toggle-mute)
  - [GameEvents](#gameevents)
      - [On](#on)
      - [Once](#once)
      - [Off](#off)
      - [Emit](#emit)
      - [Clear](#clear)
      - [Clear (eventName)](#clear-eventname)
      - [Clear (filter)](#clear-filter)
      - [Reset](#reset)
      - [Names](#names)
      - [Event Count](#event-count)
  - [Follow](#follow)
      - [Follow](#follow-1)
      - [Stop Follower](#stop-follower)
  - [Random](#random)
      - [bool](#bool)
      - [int](#int)
      - [float](#float)
      - [double](#double)
      - [Item](#item)
      - [index](#index)
      - [Vector2](#vector2)
      - [Vector3](#vector3)
      - [Color](#color)
  - [Math](#math)
      - [Constants](#constants)
      - [To Radian](#to-radian)
      - [To Degree](#to-degree)
      - [Absolute](#absolute)
      - [Clamp](#clamp)
      - [Lerp](#lerp)
      - [LerpUnclamped](#lerpunclamped)
      - [Sin](#sin)
      - [Cos](#cos)
      - [Tan](#tan)
      - [Asin](#asin)
      - [Acos](#acos)
      - [Atan](#atan)
      - [Min](#min)
      - [Max](#max)
      - [Floor](#floor)
      - [Ceiling](#ceiling)
      - [Round](#round)
      - [Sign](#sign)
      - [Pow](#pow)
      - [Sqrt (Square Root)](#sqrt-square-root)
  - [Timers](#timers)
      - [Timeout](#timeout)
      - [Interval](#interval)
      - [Stop Timer](#stop-timer)



<br>

## Quick Start

Import the `namespace`:

```cs
using Easy;
```

Use the shortcuts via the `e.[shortcut]`:

```cs
e.RandomFloat()
```
```cs
e.SetTimeout(...)
```
```cs
e.Play(clip)
```
```cs
e.Max(1, 2, 3)
```



<br>

## e.[shortcut]

```cs
public static class e {...}
```

`e` is a `static class` that contains list of shortcut methods, so to use api you can simply write `e.[shortcut]`, another benefit of using `e` class is to makes your code easier to read, because it will pop out all the `easy api` calls within your source code.



<br>

## AudioPlayer

AudioPlayer is a tool to play `AudioClip` in the 2D space.

```cs
public static class AudioPlayer {...}
```


<br>

#### Play

To play an `AudioClip` via `AudioPlayer` you can use:

```cs
void AudioPlayer.Play(AudioClip clip)
```
```cs
void AudioPlayer.Play(AudioClip clip, float volume)
```
```cs
void e.Play(AudioClip clip)
```
```cs
void e.Play(AudioClip clip, float volume)
```

> Examples:
> 
> ```cs
> e.Play(clip, 0.5f);
> ```
> ```cs
> AudioPlayer.Play(clip, 0.5f);
> ```


<br>

#### Stop

To stop all the playing clips of the `AudioPlayer` use:

```cs
void AudioPlayer.Stop()
```

> Examples:
>
> ```cs
> AudioPlayer.Stop();
> ```


<br>

#### Volume

To read or change volume of the `AudioPlayer` use volume property:

```cs
float AudioPlayer.volume { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.volume = 0.5f;
> ```


<br>

#### Mute

To read or change mute/unmute state of the `AudioPlayer` use mute property:

```cs
bool AudioPlayer.mute { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.mute = true;
> ```


<br>

#### Output

To read or change target mixer group of the `AudioPlayer` use output property:

```cs
AudioMixerGroup AudioPlayer.output { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.output = master;
> ```


<br>

#### Toggle Mute

To toggle mute state of the `AudioPlayer` use:

```cs
bool AudioPlayer.ToggleMute()
```

> Examples:
> 
> ```cs
> var isMute = AudioPlayer.ToggleMute();
> ```



<br>

## GameEvents

GameEvents is a service that make it easy to emiting event in all active scenes.

```cs
public static class GameEvents {...}
```

> Supports additive scenes.

> Supports single emission listeners (`Once`).


<br>

#### On

To add an `event listener` use:

```cs
void e.On(string eventName, Action listener)
```
```cs
void e.On(string eventName, Action<bool> listener)
```
```cs
void e.On(string eventName, Action<int> listener)
```
```cs
void e.On(string eventName, Action<float> listener)
```
```cs
void e.On(string eventName, Action<string> listener)
```
```cs
void e.On(string eventName, Action<Color> listener)
```
```cs
void e.On(string eventName, Action<Vector3> listener)
```
```cs
void e.On<T>(string eventName, Action<T> listener)
```
```cs
void GameEvents.On(string eventName, Action<object> listener)
```

> Examples:
> 
> ```cs
> e.On("Pause", OnPause);
> 
> void OnPause(bool paused) {...}
> ```


<br>

#### Once

To add an `event listener` just for next emit use:

```cs
void e.Once(string eventName, Action listener)
```
```cs
void e.Once(string eventName, Action<bool> listener)
```
```cs
void e.Once(string eventName, Action<int> listener)
```
```cs
void e.Once(string eventName, Action<float> listener)
```
```cs
void e.Once(string eventName, Action<string> listener)
```
```cs
void e.Once(string eventName, Action<Color> listener)
```
```cs
void e.Once(string eventName, Action<Vector3> listener)
```
```cs
void e.Once<T>(string eventName, Action<T> listener)
```
```cs
void GameEvents.Once(string eventName, Action<object> listener)
```

> Examples:
> 
> ```cs
> e.Once("GameOver", OnGameOver);
> 
> void OnGameOver() {...}
> ```


<br>

#### Off

To remove an `event listener` use:

```cs
void e.Off(string eventName, Action listener)
```
```cs
void e.Off(string eventName, Action<bool> listener)
```
```cs
void e.Off(string eventName, Action<int> listener)
```
```cs
void e.Off(string eventName, Action<float> listener)
```
```cs
void e.Off(string eventName, Action<string> listener)
```
```cs
void e.Off(string eventName, Action<Color> listener)
```
```cs
void e.Off(string eventName, Action<Vector3> listener)
```
```cs
void e.Off<T>(string eventName, Action<T> listener)
```
```cs
void GameEvents.Off(string eventName, Action<object> listener)
```

> **Warning**: Never forget to use `Off` method to unregister your listeners within `OnDestroy` or when you don't need them, otherwise it will cause **Unnecessary Calls** and **Memory Leaks**.

> **Warning**: Listeners **ARE NOT** automatically removed when scenes change.

> **Warning**: Listeners **ARE NOT** automatically removed when `GameObject` or `MonoBehaviour` get destroyed.

> **Warning**: Listeners that added via `Once` **ARE ALSO** need to get removed via `Off` method withing `OnDestroy`, this is for safety in case they never get called to prevent **Unnecessary Call** and **Memory Leaks**.

> Examples:
> ```cs
> void Awake() {
>     e.On("Pause", OnPause);
> }
>
> void OnDestroy() {
>     // never forget to remove the listener
>     e.Off("Pause", OnPause);
> }
>
> void OnPause() {...}
> ```


<br>

#### Emit

To emit an `event` use:

```cs
void e.Emit(string eventName)
```
```cs
void e.Emit<T>(string eventName, T data)
```
```cs
void GameEvents.Emit(string eventName, object data)
```

> Examples:
>
> ```cs
> e.Emit("GameOver");
> ```
> ```cs
> GameEvents.Emit("GameOver", score);
> ```


<br>

#### Clear

To remove all listeners of all events use:

```cs
void GameEvents.Clear()
```

> **Warning**: Be careful of using this method if you have registered listeners from the objects of additive scenes incluing `DontDestroyOnLoad` `Scene`, They will also be removed.

> Examples:
> 
> ```cs
> GameEvents.Clear();
> ```


<br>

#### Clear (eventName)

To remove all listeners of an event use:

```cs
void GameEvents.Clear(string eventName)
```

> **Warning**: Be careful of using this method if you're listening to the event 'eventName' in additive scenes including `DontDestroyOnLoad` `Scene`, They will also be removed.

> Examples:
> 
> ```cs
> GameEvents.Clear("GameOver");
> ```


<br>

#### Clear (filter)

Removes all listeners of events that filtered by their name:

```cs
void GameEvents.Clear(Func<string, bool> filter)
```

> Examples:
> 
> ```cs
> // registered listeners
> e.On("Map/Pause", OnPause);
> e.On("Map/GameOver", OnGameOver);
> e.On("Map/LoadLevel", OnLoadLevel);
>
> // removes all listeners of events that their name starts with "Map"
> GameEvents.Clear(name => name.StartsWith("Map"));
> ```


<br>

#### Reset

To reinitialize the `GameEvents` use:

```cs
void GameEvents.Reset()
```

> **Note**: After calling this method is like working with new `GameEvents`. (all listeners and event keys will be removed.)

> **Warning**: Calling this method will removes all events and listeners of the `GameEvents`.

> Examples:
> 
> ```cs
> GameEvents.Reset();
> ```


<br>

#### Names

To get names of all registered events use:

```cs
string[] GameEvents.GetNames()
```

> Examples:
> 
> ```cs
> var eventNames = GameEvents.GetNames();
> ```


<br>

#### Event Count


To get counts of events use:

```cs
int GameEvents.eventCount { get; }
```

> Examples:
> 
> ```cs
> var eventCount = GameEvents.eventCount;
> ```



<br>

## Follow

Follow tool let you bind a `Transfrom` to another `Transform`:


<br>

#### Follow

```cs
void e.Follow(Transform follower, Transform target)
```
```cs
void e.Follow(Transform follower, Transform target, bool keepDistance)
```
```cs
void e.Follow(Transform follower, Transform target, Vector3 offset)
```
```cs
void e.Follow(Transform follower, Transform target, Action<Transform, Transform> method)
```

> Examples:
> 
> ```cs
> e.Follow(transform, player);
> ```


<br>

#### Stop Follower

To remove the following `behaviour` use:

```cs
void e.StopFollower(Transform follower)
```

> Examples:
> 
> ```cs
> e.StopFollow(transform);
> ```



<br>

## Random

To create random `primitive` values use:


<br>

#### bool

```cs
bool e.RandomBool()
```
```cs
// weight is between 0.0 to 1.0
// 0 mean always false
// 1 mean always true
bool e.RandomBool(float weight)
```

> Examples:
> 
> ```cs
> var b = e.RandomBool();
> ```
> ```cs
> var b = e.RandomBool(0.6f);
> ```


<br>

#### int

```cs
// 0 (inclusive) to int.MaxValue (exclusive)
int e.RandomInt()
```
```cs
// 0 (inclusive) to max (exclusive)
int e.RandomInt(int max)
```
```cs
// min (inclusive) to max (exclusive)
int e.RandomInt(int min, int max)
```
```cs
// range.x (inclusive) to range.y (exclusive)
int e.RandomInt(Vector2Int range)
```

> Examples:
> 
> ```cs
> var i = e.RandomInt();
> ```
> ```cs
> var i = e.RandomInt(10, 20);
> ```


<br>

#### float

```cs
// 0 (inclusive) to 1 (exclusive)
float e.RandomFloat()
```
```cs
// 0 (inclusive) to max (exclusive)
float e.RandomFloat(float max)
```
```cs
// min (inclusive) to max (exclusive)
float e.RandomFloat(float min, float max)
```
```cs
// range.x (inclusive) to range.y (exclusive)
float e.RandomFloat(Vector2 range)
```

> Examples:
> 
> ```cs
> var f = e.RandomFloat();
> ```
> ```cs
> var f = e.RandomFloat(10f, 20f);
> ```


<br>

#### double

```cs
// 0 (inclusive) to 1 (exclusive)
double e.RandomDouble()
```

> Examples:
> 
> ```cs
> var d = e.RandomDouble();
> ```


<br>

#### Item

```cs
// random item of an array, or default(T) if it's null or empty
T e.RandomItem<T>(T[] array)
```
```cs
// random item of an array, or defaultValue if it's null or empty
T e.RandomItem<T>(T[] array, T defaultValue)
```
```cs
// random item of a list, or default(T) if it's null or empty
T e.RandomItem<T>(List<T> list)
```
```cs
// random item of a list, or defaultValue if it's null or empty
T e.RandomItem<T>(List<T> list, T defaultValue)
```

> Examples:
> 
> ```cs
> int[] array = ...
> 
> var i = e.RandomItem(array);
> ```
> ```cs
> List<float> list = ...
>
> var i = e.RandomItem(list, -1);
> ```


<br>

#### index

```cs
// 0 to (array.Length - 1) (inclusive)
int e.RandomIndex<T>(T[] array)
```
```cs
// 0 to (list.Count - 1) (inclusive)
int e.RandomIndex<T>(List<T> list)
```

> Examples:
> 
> ```cs
> int[] array = ...
> 
> var i = e.RandomIndex(array);
> ```
> ```cs
> List<float> list = ...
>
> var i = e.RandomIndex(list);
> ```


<br>

#### Vector2

```cs
// point inside the unit circle
Vector2 e.RandomVector2()
```
```cs
// point inside the circle with specified radius
Vector2 e.RandomVector2(float radius)
```
```cs
// point on the circumference of the unit circle
Vector2 e.RandomNormal2()
```

> Examples:
> 
> ```cs
> var v = e.RandomVector2();
> ```
> ```cs
> var v = e.RandomVector2(5f);
> ```


<br>

#### Vector3

```cs
// point inside the unit shpere
Vector3 e.RandomVector3()
```
```cs
// point inside the shpere with specified radius
Vector3 e.RandomVector3(float radius)
```

> Examples:
> 
> ```cs
> var v = e.RandomVector3();
> ```
> ```cs
> var v = e.RandomVector3(5f);
> ```


<br>

#### Color


```cs
Color e.RandomColor()
```
```cs
Color e.RandomColor(Vector2 hue)
```
```cs
Color e.RandomColor(Vector2 hue, Vector2 saturation)
```
```cs
Color e.RandomColor(Vector2 hue, Vector2 saturation, Vector2 value)
```

> Examples:
> 
> ```cs
> var color = e.RandomColor();
> ```



<br>

## Math

A list of easy access mathematical tools:


<br>

#### Constants

```cs
// the π value
const float e.PI
```
```cs
// degree to radian conversion constant
const float e.D2R
```
```cs
// radian to degree conversion constant
const float e.R2D
```

> Examples:
> 
> ```cs
> var circumference = 2 * e.PI * radius;
> ```
> ```cs
> var radian = e.D2R * 180;
> ```
> ```cs
> var degree = e.R2D * radian;
> ```


<br>

#### To Radian

Another way to convert degree to radian is:

```cs
float e.Radian(float degree)
```
```cs
double e.Radian(double degree)
```

> Examples:
> 
> ```cs
> var radian = e.Radian(180);
> ```


<br>

#### To Degree

Another way to convert radian to degree is:

```cs
float e.Degree(float radian)
```
```cs
double e.Degree(double radian)
```

> Examples:
> 
> ```cs
> var degree = e.Degree(radian);
> ```


<br>

#### Absolute

To get absolute value of a value use:

```cs
int e.Abs(int value)
```
```cs
long e.Abs(long value)
```
```cs
float e.Abs(float value)
```
```cs
double e.Abs(double value)
```

> Examples:
> 
> ```cs
> var absolute = e.Abs(-123);
> ```


<br>

#### Clamp

To clamp a value between min and max use:

```cs
int e.Clamp(int value, int min, int max)
```
```cs
float e.Clamp(float value, float min, float max)
```
```cs
double e.Clamp(double value, double min, double max)
```
```cs
float e.Clamp01(float value)
```
```cs
double e.Clamp01(double value)
```

> Examples:
> 
> ```cs
> var val = 150;
> 
> var res = e.Clamp(val, 0, 100);
> ```
> ```cs
> var val = 1.5f;
> 
> var res = e.Clamp01(val);
> ```


<br>

#### Lerp

Interpolation between two value (`t` gets clamped from 0 to 1):

```cs
float e.Lerp(float a, float b, float t)
```
```cs
double e.Lerp(double a, double b, double t)
```
```cs
Vector2 e.Lerp(Vector2 a, Vector2 b, float t)
```
```cs
Vector3 e.Lerp(Vector3 a, Vector3 b, float t)
```
```cs
Color e.Lerp(Color a, Color b, float t)
```

> Examples:
> 
> ```cs
> var f = e.Lerp(0, 10, 0.5f);
> ```
> ```cs
> var c = e.Lerp(Color.blue, Color.red, 0.5f);
> ```


<br>

#### LerpUnclamped

Interpolation between two value (`t` does not get clamped):

```cs
float e.LerpUnclamped(float a, float b, float t)
```
```cs
double e.LerpUnclamped(double a, double b, double t)
```
```cs
Vector2 e.LerpUnclamped(Vector2 a, Vector2 b, float t)
```
```cs
Vector3 e.LerpUnclamped(Vector3 a, Vector3 b, float t)
```
```cs
Color e.LerpUnclamped(Color a, Color b, float t)
```

> Examples:
> 
> ```cs
> var f = e.LerpUnclamped(0, 10, 1.5f);
> ```
> ```cs
> var v = e.LerpUnclamped(Vector3.zero, Vector3.up, 1.5f);
> ```


<br>

#### Sin

```cs
float e.Sin(float radian)
```
```cs
double e.Sin(double radian)
```

> Examples:
> 
> ```cs
> var s = e.Sin(180 * e.D2R);
> ```


<br>

#### Cos

```cs
float e.Cos(float radian)
```
```cs
double e.Cos(double radian)
```

> Examples:
> 
> ```cs
> var c = e.Cos(90 * e.D2R);
> ```


<br>

#### Tan

```cs
float e.Tan(float radian)
```
```cs
double e.Tan(double radian)
```

> Examples:
> 
> ```cs
> var t = e.Tan(45 * e.D2R);
> ```


<br>

#### Asin

```cs
float e.Asin(float value)
```
```cs
double e.Asin(double value)
```

> Examples:
> 
> ```cs
> var a = e.Asin(sine);
> ```


<br>

#### Acos

```cs
float e.Acos(float value)
```
```cs
double e.Acos(double value)
```

> Examples:
> 
> ```cs
> var a = e.Acos(cosine);
> ```



<br>

#### Atan

```cs
float e.Atan(float value)
```
```cs
double e.Atan(double value)
```

> Examples:
> 
> ```cs
> var a = e.Atan(tangent);
> ```


<br>

#### Min

```cs
int e.Min(int a, int b)
```
```cs
int e.Min(params int[] values)
```
```cs
int e.Min(IEnumerable<int> source)
```
```cs
float e.Min(float a, float b)
```
```cs
float e.Min(params float[] values)
```
```cs
float e.Min(IEnumerable<float> source)
```

> Examples:
> 
> ```cs
> var m = e.Min(1, 2, 3); // m = 1
> ```


<br>

#### Max

```cs
int e.Max(int a, int b)
```
```cs
int e.Max(params int[] values)
```
```cs
int e.Max(IEnumerable<int> source)
```
```cs
float e.Max(float a, float b)
```
```cs
float e.Max(params float[] values)
```
```cs
float e.Max(IEnumerable<float> source)
```

> Examples:
> 
> ```cs
> var m = e.Max(1, 2, 3); // m = 3
> ```


<br>

#### Floor

```cs
int e.Floor(float value)
```
```cs
int e.Floor(double value)
```

> Examples:
> 
> ```cs
> var res = e.Floor(1.23f);
> ```


<br>

#### Ceiling

```cs
int e.Ceiling(float value)
```
```cs
int e.Ceiling(double value)
```

> Examples:
> 
> ```cs
> var res = e.Ceiling(1.23f);
> ```


<br>

#### Round

```cs
int e.Round(float value)
```
```cs
int e.Round(double value)
```

> Examples:
> 
> ```cs
> var res = e.Round(1.499f);
> ```


<br>

#### Sign

```cs
int e.Sign(int value)
```
```cs
int e.Sign(float value)
```
```cs
int e.Sign(double value)
```

> Examples:
> 
> ```cs
> var r = e.Sign(-10); // r == -1
> ```
> ```cs
> var r = e.Sign(0); // r == 0
> ```
> ```cs
> var r = e.Sign(10); // r == 1
> ```


<br>

#### Pow

```cs
float e.Pow(float value, float power)
```
```cs
double e.Pow(double value, double power)
```

> Examples:
> 
> ```cs
> var v = e.Pow(2, 8);
> ```


<br>

#### Sqrt (Square Root)

```cs
float e.Sqrt(float value)
```
```cs
double e.Sqrt(double value)
```

> Examples:
> 
> ```cs
> var res = e.Sqrt(16);
> ```



<br>

## Timers

With timer api you call a method after a delay.


<br>

#### Timeout

To call method after a delay use:

```cs
int e.SetTimeout(Action callback, float delay)
```
```cs
int e.SetTimeout<T>(Action<T> callback, float delay, T arg)
```
```cs
int e.SetTimeout<T1, T2>(Action<T1, T2> callback, float delay, T1 arg1, T2 arg2)
```

> Examples:
> 
> ```cs
> e.SetTimeout(TimerCallback, 2);
>
> void TimerCallback() {...}
> ```


<br>

#### Interval

To call method repeatedly with a delay between each call:

```cs
int e.SetInterval(Action callback, float delay)
```
```cs
int e.SetInterval<T>(Action<T> callback, float delay, T arg)
```
```cs
int e.SetInterval<T1, T2>(Action<T1, T2> callback, float delay, T1 arg1, T2 arg2)
```

> Examples:
> 
> ```cs
> e.SetInterval(IntervalCallback, 1);
>
> void IntervalCallback() {...}
> ```


<br>

#### Stop Timer

To stop the timer use:

```cs
void e.StopTimer(int id)
```

> Examples:
> 
> ```cs
> var timer = e.SetInterval(IntervalCallback, 1f);
>
> e.StopTimer(timer);
> ```
